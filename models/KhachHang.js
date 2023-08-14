import Person from "./Person";



class KhachHang extends Person {
    constructor( maID, diaChi, hoTen, email, doiTuong,tenCongTy, triGiaHoaDon, danhGia) {
        super(maID, diaChi, hoTen, email, doiTuong)
        this.maID = maID ;
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.email = email;
        this.doiTuong = doiTuong;
        this.tenCongTy = tenCongTy;
        this.triGiaHoaDon = triGiaHoaDon;
        this.danhGia = danhGia;
    }

}
export default KhachHang