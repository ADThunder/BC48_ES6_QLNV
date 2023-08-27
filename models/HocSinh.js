import Person from "./Person.js"

class HocSinh extends Person {
    constructor ( maID, diaChi, hoTen, email, doiTuong, diemToan, diemLy, diemHoa) {
        super(maID, diaChi,hoTen , email, doiTuong);
        this.maID = maID ;
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.email = email;
        this.doiTuong = doiTuong;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    tinhDiemTrungBinh = () => {
        return (this.diemToan * 1 + this.diemLy * 1 + this.diemHoa * 1) / 3
    }
}
export default HocSinh;

