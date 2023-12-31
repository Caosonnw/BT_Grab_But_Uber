// console.log('Hello world');

// Phân tích các xử lí có trong bài tập tính Grab
/**
 * 1. Thực hiện tạo một sự kiện onclick cho nút tỉnh tiền
 * 2. Thực hiện lấy dữ liệu từ trên layout khi người dùng đã nhập xong
 * 3. Thực hiện xử lí kiểm tra xem người dùng đã đi phương tiện gì để lấy ra giá tiền hợp lí
 * // uber_car, uber_suv...
 * 4. Thực hiện kiểm tra với số km đi để tính toán ra giá tiền hợp lí
 * 5. Thực hiện xử lí đưa dữ liệu lên giao diện cho người dùng
 *
 */
var uberX = document.getElementById("uberX").value;
var uberSUV = document.getElementById("uberSUV").value;
var uberBlack = document.getElementById("uberBlack").value;

document.getElementById("btn_tinhTien").onclick = function () {
  var soKM = document.getElementById("txt-km").value * 1;
  var thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  // console.log(soKM);
  // console.log(thoiGianCho);
  // Gọi tới input cso thuộc tính name = selector và người dùng chọn bằng thuộc tính checked
  var loaiXe = document.querySelector('input[name="selector"]:checked').value;
  const Uber_Car = "uberCar";
  const Uber_SUV = "uberSUV";
  const Uber_Black = "uberBlack";
  var tongTien = 0;
  // console.log(loaiXe);
  if (loaiXe == Uber_Car) {
    tongTien = TinhTongTien(loaiXe);
  } else if (loaiXe == Uber_SUV) {
    tongTien = TinhTongTien(loaiXe);
  } else if (loaiXe == Uber_Black) {
    tongTien = TinhTongTien(loaiXe);
  }

  function giaTienKmDauTien(loaiXe) {
    switch (loaiXe) {
      case Uber_Car: {
        return 8000;
      }
      case Uber_SUV: {
        return 9000;
      }
      default: {
        return 10000;
      }
    }
  }
  function giaTienTu1Den19(loaiXe) {
    switch (loaiXe) {
      case Uber_Car: {
        return 7500;
      }
      case Uber_SUV: {
        return 8500;
      }
      default: {
        return 9500;
      }
    }
  }
  function giaTienTren19(loaiXe) {
    switch (loaiXe) {
      case Uber_Car: {
        return 7000;
      }
      case Uber_SUV: {
        return 8000;
      }
      default: {
        return 9000;
      }
    }
  }
  function giathoiGianCho(loaiXe) {
    switch (loaiXe) {
      case Uber_Car: {
        return 2000;
      }
      case Uber_SUV: {
        return 3000;
      }
      default: {
        return 3500;
      }
    }
  }

  var tienKmDauTien = giaTienKmDauTien(loaiXe);
  var tienKMTu1Den19 = giaTienTu1Den19(loaiXe);
  var tienKMTren19 = giaTienTren19(loaiXe);
  var giaCho = giathoiGianCho(loaiXe);
  var soLanCho = 0;

  function TinhTongTien(loaiXe) {
    if (soKM <= 1) {
      tongTien = tienKmDauTien * soKM;
    } else if (soKM > 1 && soKM <= 19) {
      tongTien = tienKmDauTien + (soKM - 1) * tienKMTu1Den19;
    } else if (soKM > 19) {
      tongTien =
        tienKmDauTien + 18 * tienKMTu1Den19 + (soKM - 19) * tienKMTren19;
    }
    if (thoiGianCho >= 3) {
      soLanCho = Math.floor(thoiGianCho / 3);
      tienCho = soLanCho * giaCho;
    } else if (thoiGianCho < 3) {
      tienCho = 0;
    }
    tongTien += tienCho;
    return tongTien;
  }

  var tongTien = TinhTongTien(loaiXe);
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML =
    tongTien.toLocaleString({
      style: "currency",
      currency: "VND",
    }) + " VNĐ";
  document.getElementById("btn_inHoaDon").onclick = function () {
    document.getElementById("dg_kmDauTien").innerHTML = `${tienKmDauTien.toLocaleString({
      style: "currency",
      currency: "VND",
    })}`;
    document.getElementById("tt_kmDauTien").innerHTML = `${tienKmDauTien.toLocaleString({
      style: "currency",
      currency: "VND",
    })}`;
    document.getElementById("dg_kmTofor").innerHTML = `${tienKMTu1Den19.toLocaleString({
      style: "currency",
      currency: "VND",
    })}`;

    if (soKM > 19) {
      var remainingKM = soKM - 19;

      document.getElementById("ct_kmTofor").innerHTML = `Từ 1 đến ` + `19 KM`;
      document.getElementById("sd_kmTofor").innerHTML = `${19 - 1} KM`;

      document.getElementById("ct_kmAbove").innerHTML = `Từ ${
        soKM - remainingKM
      } đến ${soKM} KM`;
      document.getElementById("sd_kmAbove").innerHTML = `${soKM - 19} KM`;

      document.getElementById("kmAbove").style.display = "table-row";
      document.getElementById("kmTofor").style.display = "table-row";
      document.getElementById("tt_kmTofor").innerHTML = `${
        ((19 - 1) * tienKMTu1Den19).toLocaleString({
          style: "currency",
          currency: "VND",
        })
      }`;
    } else{
      document.getElementById("kmAbove").style.display = "none";

      document.getElementById("ct_kmTofor").innerHTML =
        `Từ 1 đến ` + `${soKM} KM`;
      document.getElementById("sd_kmTofor").innerHTML = `${soKM - 1} KM`;

      document.getElementById("tt_kmTofor").innerHTML = `${
       ((soKM - 1) * tienKMTu1Den19).toLocaleString({
          style: "currency",
          currency: "VND",
       })
      }`;
    }
    if (soKM <= 1) {
      document.getElementById('kmTofor').style.display = "none";
    } else if (soKM >= 2) {
      document.getElementById("kmTofor").style.display = "table-row";
    }
  };
  document.getElementById("dg_kmAbove").innerHTML = `${tienKMTren19.toLocaleString({
    style: "currency",
    currency: "VND",
  })}`;
  document.getElementById("tt_kmAbove").innerHTML = `${
    ((soKM - 19) * tienKMTren19).toLocaleString({
      style: "currency",
      currency: "VND",
    })
  }`;

  document.getElementById("sd_WTime").innerHTML = soLanCho;
  document.getElementById("dg_WTime").innerHTML = `${giaCho.toLocaleString({
    style: "currency",
    currency: "VND",
  })}`;
  document.getElementById("tt_WTime").innerHTML = `${tienCho.toLocaleString({
    style: "currency",
    currency: "VND",
  })}`;

  document.getElementById(
    "tongTien"
  ).innerHTML = `Tổng tiền: ${tongTien.toLocaleString({
    style: "currency",
    currency: "VND",
  })} VNĐ`;
};
// Phạm vi sử dụng của biến: Global Scope và Function Scope
document.getElementById("btn_download").addEventListener("click", function () {

  var blob = new Blob(["Dữ liệu PDF ở đây"], { type: "application/pdf" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "hoa-don-uber.pdf";
  link.click();
});
