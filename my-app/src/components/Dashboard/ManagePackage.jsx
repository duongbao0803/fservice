import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, InputGroup } from "react-bootstrap";
import { useFormik } from "formik";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function ManagePackage() {
  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: async (values) => {
      const handleUploadFirebase = async () => {
        const file = values.file;
        const storageRef = ref(
          storage,
          `/Fservice/${generateUniqueFileName(file.name)}`
        );
        await uploadBytes(storageRef, file, { contentType: file.type });
        const downloadURL = await getDownloadURL(storageRef);
        console.log("Uploaded image URL:", downloadURL);
      };

      await handleUploadFirebase();
    },
  });

  // Hàm để tạo tên tệp tin duy nhất
  const generateUniqueFileName = (originalFileName) => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = originalFileName.split(".").pop();
    return `${timestamp}_${randomString}.${extension}`;
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload Image
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title> Upload Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Image
              </InputGroup.Text>
              <Form.Control
                id="file"
                type="file"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  formik.values.file = event.target.files[0];
                }}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                accept="image/*"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
