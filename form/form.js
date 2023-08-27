const doiTuongSelect = document.getElementById('doiTuong');
const formDiem = document.getElementById('formDiem');
const formTinhTienNV = document.getElementById('formTinhTienNV');

function checkForm (value) {
  console.log(value)
  if (value === "hocSinh") {
    formDiem.style.display = "block";
    formTinhTienNV.style.display = "none";
  } else if (value === "nhanVien") {
    formTinhTienNV.style.display = "inline-block";
    formDiem.style.display = "none";
  } else {
    formDiem.style.display = "none";
    formTinhTienNV.style.display = "none";
  }
}


doiTuongSelect.addEventListener('change', () => {
    checkForm(doiTuongSelect.value)
})