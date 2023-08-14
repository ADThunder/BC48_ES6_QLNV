import Person from "./Person.js";

class NhanVien extends Person {
    constructor(hoTen, diaChi, maID, email, doiTuong, soNgayLam, luongCanBan) {
        super(hoTen, diaChi, maID, email, doiTuong);
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.maID = maID; 
        this.email = email;
        this.doiTuong = doiTuong;
        this.soNgayLam = soNgayLam;
        this.luongCanBan = luongCanBan;
    };
    tinhTienLuong = () => {
        return this.soNgayLam * this.luongCanBan;
    };
}

export default NhanVien;