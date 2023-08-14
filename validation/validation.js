

//check tên 
const regexTen = /^[a-zA-Z'-'\sáàảãạăâắằấầặẵẫậéèẻ ẽẹếềểễệóòỏõọôốồổỗộ ơớờởỡợíìỉĩịđùúủũụưứ� �ửữựÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ ƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼ� ��ỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞ ỠỢỤỨỪỬỮỰỲỴÝỶỸửữựỵ ýỷỹ]*$/;

//check email
const regexEmail =
      /^[a-zA-Z0-9._%+-]{1,18}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,18}$/;
//check maID
const regexID =/^[0-9]{4,6}$/;
//check diaChi
const regexDiaChi = /^[0-9]+\s[A-Za-z\s]+$/;
//check diem
const regexDiem = /^[0-9]$|^10$/;
// check ngày 
const regrexNgay = /^(3[01]|[12][0-9]|[1-9])$/;
//check tiền
const regrexMoney = /^(1\d{6}|[2-9]\d{6}|1[0-9]{7}|2[01][0-9]{7})$/;