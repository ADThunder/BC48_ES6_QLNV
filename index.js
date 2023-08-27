import HocSinh from "./models/HocSinh.js";
import ListPerson from "./models/ListPerson.js";
import NhanVien from "./models/NhanVien.js";
import { removeVietnameseTones } from "./util/util.js";

let listPerson = new ListPerson();
listPerson.layLocalDoiTuong();

const themDoiTuong = (event) => {
  event.preventDefault();
  const arrField = document.querySelectorAll(
    "#QLHVForm input, #QLHVForm select"
  );
  // console.log(arrField)
  let person;
  const selectedInput = document.querySelector("#QLHVForm select").value;
  // console.log(selectedInput)
  if (selectedInput === "hocSinh") {
    person = new HocSinh();
  } else if (selectedInput === "nhanVien") {
    person = new NhanVien();
  } else {
    alert("Vui lòng chọn đối tương");
  }
  for (let item of arrField) {
    const { id, value } = item;
    console.log(id)
    if (selectedInput === "hocSinh" && id !== "soNgayLam" && id !== "luongCanBan") {
      if (value === "") {
        alert("Vui lòng không bỏ trống");
        return
      }
    } else if (selectedInput === "nhanVien" && id !== "diemToan" && id !== "diemLy" && id !== "diemHoa") {
      if (value === "") {
        alert('Vui lòng không bỏ trống')
        return
      }
    }
    if (value !== "" && selectedInput === "hocSinh" && id !== "soNgayLam" && id !== "luongCanBan") {
      if (id === "maID" && !regexID.test(value)) {
        alert("Vui lòng nhập mã ID từ 4 đến 6 kí tự là số")
        return
      }
      if (id === "hoTen" && !regexTen.test(value)) {
        alert("Vui lòng nhập đúng định dạng họ tên Tiếng Việt")
        return
      }
      if (id === "email" && !regexEmail.test(value)) {
        alert('Vui lòng nhập định dạng email hợp lệ');
        return
      };
      if (id === "diemToan" && !regexDiem.test(value)) {
        alert("Vui lòng nhập đúng định dạng điểm từ 0 đến 10")
        return
      };
      if (id === "diemLy" && !regexDiem.test(value)) {
        alert("Vui lòng nhập đúng định dạng điểm từ 0 đến 10")
        return
      };
      if (id === "diemHoa" && !regexDiem.test(value)) {
        alert("Vui lòng nhập đúng định dạng điểm từ 0 đến 10")
        return
      }
    } else if (value !== "" && selectedInput === "nhanVien" && id !== "diemToan" && id !== "diemLy" && id !== "diemHoa") {
      if (id === "hoTen" && !regexTen.test(value)) {
        alert("Vui lòng nhập đúng định dạng họ tên Tiếng Việt")
        return
      };
      if (id === "maID" && !regexID.test(value)) {
        alert("Vui lòng nhập mã ID từ 4 đến 6 kí tự là số")
        return
      }
      if (id === "email" && !regexEmail.test(value)) {
        alert('Vui lòng nhập định dạng email hợp lệ');
        return
      };
      if (id === "soNgayLam" && !regrexNgay.test(value)) {
        alert('Vui lòng nhập số ngày làm trong tháng hợp lệ')
        return
      }
      if (id === "luongCanBan" && !regrexMoney.test(value)) {
        alert("Vui lòng nhập đúng số tiền hợp lệ")
        return
      }
    }

    person[id] = value;
  }

  listPerson.themDoiTuong(person);
  document.getElementById("QLHVForm").reset();
  document.querySelector(".modal-footer .btn-secondary").click();
  listPerson.renderDoiTuong();
  listPerson.luuLocalDoiTuong();
};
const xoaDoiTuong = (id) => {
  listPerson.xoaDoiTuong(id);
};
const layThongTinDoiTuong = (id) => {
  listPerson.layThongTinDoiTuong(id);
};

document.getElementById("btnThem").onmousedown = ()=>{
  checkForm("")

}

document.getElementById("btnCapNhat").onclick = () => {
  const arrField = document.querySelectorAll(
    "#QLHVForm input, #QLHVForm select"
  );

  let person;
  const selectedInput = document.querySelector("#QLHVForm select").value;
  // console.log(selectedInput)
  if (selectedInput == "hocSinh") {
    person = new HocSinh();
  } else if (selectedInput == "nhanVien") {
    person = new NhanVien();
  }
  for (let item of arrField) {
    const { id, value } = item;
    person[id] = value;
  }
  // checkForm()

  //tìm vị trí của nó trong mảng
  let index = listPerson.arrListPerson.findIndex((item) => {
    // console.log(item)
    person.maID == item.maID;
    return person.maID == item.maID;
  });
  console.log(index);
  if (index != -1) {
    listPerson.arrListPerson[index] = person;
  }
  document.getElementById("QLHVForm").reset();
  checkForm(doiTuongSelect.value)
  document.getElementById("btnThem").click();
  listPerson.renderDoiTuong();
  listPerson.luuLocalDoiTuong();
};

document.getElementById("selLoai").onchange = () => {
  const { value } = event.target;
  console.log(value)
  let arrFilter = [];
  let arrHocSinh = [];
  let arrNhanVien = [];
  for (let doiTuong of listPerson.arrListPerson) {
    if (doiTuong instanceof HocSinh) {
      arrHocSinh.push(doiTuong);
    } else if (doiTuong instanceof NhanVien) {
      arrNhanVien.push(doiTuong);
      console.log(arrNhanVien)
    }
  }
  if (value == "Chọn loại") {
    arrFilter = listPerson.arrListPerson;
  } else if (value == "Học sinh") {
    arrFilter = [...arrHocSinh];
  } else if (value == 'Nhân viên') {
    arrFilter = [...arrNhanVien]
    console.log(arrFilter)
  }
  listPerson.renderDoiTuong(undefined, arrFilter)

};

document.getElementById("txtSearch").oninput = () => {
  const { value } = event.target;
  let keyword = removeVietnameseTones(value.toLowerCase().trim());
  let arrFilter = listPerson.arrListPerson.filter((item, index) => {
    let newName = removeVietnameseTones(item.hoTen.toLowerCase().trim());
    return newName.includes(keyword);
  });
  listPerson.renderDoiTuong(undefined, arrFilter);
};

window.themDoiTuong = themDoiTuong;
window.xoaDoiTuong = xoaDoiTuong;
window.layThongTinDoiTuong = layThongTinDoiTuong;
