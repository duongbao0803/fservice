import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
function UserProfile() {
  const [username, setUsername] = useState('baoduong03');
  const [fullName, setFullName] = useState('Duong Tôn Bảo');
  const [birthDate, setBirthDate] = useState('01/01/2023');
  const [gender, setGender] = useState('Nam');
  const [address, setAddress] = useState("112 Đường số 5, phường Hiệp Phú, TP.Thủ Đức, Tp.Hồ Chí Minh."); // Could be 'Nam', 'Nữ', or 'Khác'
  const [phone, setPhone] = useState('090 001 1234');
  const [email, setEmail] = useState('baoton1234@gmail.com');


  useEffect(() => {
    const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1c2VyU3RhZmZAZXhhbXBsZS5jb20iLCJqdGkiOiJlODVmMmQ1ZC0wZmNkLTQ1ODktYjg4ZC0yYWVkZDE0YTFmNDEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTVEFGRiIsImV4cCI6MTY5NzUwNjEzNSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA4MCIsImF1ZCI6IlVzZXJGU2VydmljZXMifQ.9LaCTyknizuC_3zljJBPTErLA0Q-WVGxddrq3dou7qgSdD7hl3bFSZTCZIdQHq4M0jL2QndEIzi-ir3M9TNidg";
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}, []);
  return (
    <div className="Info-container">
    <table>
        <thead>
            <tr>
                <th colSpan="2">THÔNG TIN</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><label>Username:</label></td>
                <td><input value={username} onChange={e => setUsername(e.target.value)} /></td>
            </tr>
            <tr>
                <td><label>Họ và tên:</label></td>
                <td><input value={fullName} onChange={e => setFullName(e.target.value)} /></td>
            </tr>
            <tr>
                <td><label>Ngày sinh:</label></td>
                <td><input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} /></td>
            </tr>
            <tr>
                <td><label>Giới tính:</label></td>
                <td>
                    <input type="radio" name="gender" checked={gender === 'Nam'} onChange={() => setGender('Nam')} /> Nam
                    <input type="radio" name="gender" checked={gender === 'Nữ'} onChange={() => setGender('Nữ')} /> Nữ
                    <input type="radio" name="gender" checked={gender === 'Khác'} onChange={() => setGender('Khác')} /> Khác
                </td>
            </tr>
            <tr>
    <td><label>Địa chỉ:</label></td>
    <td><input value={address} onChange={e => setAddress(e.target.value)} /></td>
</tr>
            <tr>
                <td><label>Số điện thoại:</label></td>
                <td><input value={phone} onChange={e => setPhone(e.target.value)} /></td>
            </tr>
            <tr>
                <td><label>Email:</label></td>
                <td><input value={email} onChange={e => setEmail(e.target.value)} /></td>
            </tr>
            <tr>
                <td colSpan="2"><button>Lưu thay đổi</button></td>
            </tr>
        </tbody>
    </table>

    <div className='avatar-section'>
        <img src="./img/z4789814557803_25847f35fc46f22af75c311d2a265381.jpg" alt="Avatar" />
        <button>Choose image</button>
        <p>Dung lượng file tối đa 1 MB</p>
        <p>Định dạng: .JPEG, .PNG</p>
    </div>
</div>
  );
}


export default UserProfile;
