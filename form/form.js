const doiTuongSelect = document.getElementById('doiTuong');
const formDiem = document.getElementById('formDiem');
const formTinhTienNV = document.getElementById('formTinhTienNV');


doiTuongSelect.addEventListener('change', () => {
    if (doiTuongSelect.value === "hocSinh") {
        formDiem.style.display = "inline-block";
        formTinhTienNV.style.display = "none";
      } else if (doiTuongSelect.value === "nhanVien") {
        formTinhTienNV.style.display = "inline-block";
        formDiem.style.display = "none";
      } else {
        formDiem.style.display = "none";
        formTinhTienNV.style.display = "none";
      }
})