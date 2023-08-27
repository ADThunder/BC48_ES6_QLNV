import HocSinh from "./HocSinh.js";
import NhanVien from "./NhanVien.js";

class ListPerson {
  arrListPerson = [];

  themDoiTuong = (person) => {
    this.arrListPerson.push(person);
    console.log(this.arrListPerson);
    
  };
  renderDoiTuong = (idHienThi = "tbodyQLHV", arr = this.arrListPerson) => {
    let content = "";
    for (let person of arr) {
      if (person instanceof HocSinh) {
        content += `
                    <tr>
                        <td>${person.maID}</td>
                        <td>${person.hoTen}</td>
                        <td>${person.diaChi}</td>
                        <td>${person.email}</td>
                        <td>${
                          person.doiTuong === "hocSinh" ? "Học sinh" : "Học sinh"
                        }</td>
                        <td>ĐTB: ${person.tinhDiemTrungBinh()}</td>
                        <td>
                            <button onclick="xoaDoiTuong('${
                              person.maID
                            }')" class="btn btn-danger">Xoá</button>
                            <button onclick="layThongTinDoiTuong('${
                              person.maID
                            }')" class="btn btn-dark">Sửa</button>
                        </td>
                    </tr>
                `;
      } else if (person instanceof NhanVien) {
        content += `
                    <tr>
                        <td>${person.maID}</td>
                        <td>${person.hoTen}</td>
                        <td>${person.diaChi}</td>
                        <td>${person.email}</td>
                        <td>${
                          person.doiTuong === "nhanVien"
                            ? "Nhân viên"
                            : "Nhân viên"
                        }</td>
                        <td>TL: ${person.tinhTienLuong()}</td>
                        <td>
                            <button onclick="xoaDoiTuong('${
                              person.maID
                            }')" class="btn btn-danger">Xoá</button>
                            <button onclick="layThongTinDoiTuong('${
                              person.maID
                            }')" class="btn btn-dark">Sửa</button>
                        </td>
                    </tr>
                `;
      }
    }
    document.getElementById(idHienThi).innerHTML = content;
  };
  luuLocalDoiTuong = () => {
    let stringArr = JSON.stringify(this.arrListPerson);
    localStorage.setItem("ArrListPerson", stringArr);
  };
  layLocalDoiTuong = () => {
    let arrLocal = JSON.parse(localStorage.getItem("ArrListPerson"));
    if (arrLocal != null) {
      for (let item of arrLocal) {
        console.log(item);
        if (item.hasOwnProperty("doiTuong") && item.doiTuong === "hocSinh") {
          let hocSinh = new HocSinh(
            item.maID,
            item.hoTen,
            item.diaChi,
            item.email,
            item.doiTuong
          );
          hocSinh.diemToan = item.diemToan;
          hocSinh.diemLy = item.diemLy;
          hocSinh.diemHoa = item.diemHoa;
          this.arrListPerson.push(hocSinh);
        } else if (
          item.hasOwnProperty("doiTuong") &&
          item.doiTuong === "nhanVien"
        ) {
          let nhanVien = new NhanVien(
            item.maID,
            item.hoTen,
            item.diaChi,
            item.email,
            item.doiTuong
          );
          nhanVien.luongCanBan = item.luongCanBan;
          nhanVien.soNgayLam = item.soNgayLam;
          this.arrListPerson.push(nhanVien);
        }
      }
      this.renderDoiTuong();
    }
  };
  xoaDoiTuong = (id) => {
    let index = this.arrListPerson.findIndex((item) => {
      // console.log(item.maID)
      item.maID === id;
      return item.maID === id;
    });
    console.log(index)
    if (index != -1) {
      // console.log(this.arrListPerson)
      this.arrListPerson.splice(index, 1);
      // console.log(this.arrListPerson)
      this.renderDoiTuong();
      this.luuLocalDoiTuong();
    }
  };
  layThongTinDoiTuong = (id) => {
    let doiTuong = this.arrListPerson.find((item) => {
      item.maID === id;
      return item.maID === id;
    });
    // console.log(doiTuong)
    checkForm(doiTuong.doiTuong)
    if (doiTuong != undefined) {
      const arrField = document.querySelectorAll(
        "#QLHVForm input, #QLHVForm select"
      );
      const selectedInput = document.querySelector("#QLHVForm select").value;
      if (selectedInput === "hocSinh") {
        formDiem.style.display = "inline-block";
        formTinhTienNV.style.display = "none";
      } else if (selectedInput === "nhanVien") {
        formDiem.style.display = "none";
        formTinhTienNV.style.display = "inline-block";
      }
      for (let field of arrField) {
        field.value = doiTuong[field.id];
      }
      document.getElementById("btnThem").click();
      document.getElementById("maID").readOnly = true;
    }
  };
}

export default ListPerson;
