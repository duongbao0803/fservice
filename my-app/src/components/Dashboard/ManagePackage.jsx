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
      image: "",
    },

    onSubmit: (values) => {
      const handleUploadFirebase = async () => {
        const data = await values.file.arrayBuffer();
        const metadata = {
          contentType: "image/png",
        };
        const storageRef = ref(storage, `/Fservice/${values.file.name}`);
        await uploadBytes(storageRef, data, metadata);
        values.image = await getDownloadURL(storageRef);
        console.log(values.image);
      };

      handleUploadFirebase();
    },
  });

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
