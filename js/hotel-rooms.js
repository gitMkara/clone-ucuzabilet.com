const roomArr = [
  {
    name: 'Deluxe Bungalow, Bahçe Manzaralı',
    area: '15m',
    img: [
      'https://images.odamax.com/img/800x600/odamax/image/upload/wyg4mroehxfpssmguyet.jpg',
      'https://images.odamax.com/img/800x600/odamax/image/upload/gp4riwthczqz2vfabkk3.jpg',
      'https://images.odamax.com/img/800x600/odamax/image/upload/ixnzwupcf8biplppcgne.jpg',
    ],
  },
  {
    name: 'Bungalow, Bahçe Manzaralı',
    area: '12m',
    img: [
      'https://images.odamax.com/img/800x600/odamax/image/upload/dwluapdbethuwblznyr6.jpg"',
      'https://images.odamax.com/img/800x600/odamax/image/upload/z8a5i8aaw5i2noecutm4.jpg"',
      'https://images.odamax.com/img/800x600/odamax/image/upload/ftegtmjftt4crxv3ijod.jpg"',
    ],
  },
  {
    name: 'Deluxe Bungalow, Bahçe Manzaralı',
    area: '15m',
    img: [
      'https://images.odamax.com/img/800x600/odamax/image/upload/wyg4mroehxfpssmguyet.jpg',
      'https://images.odamax.com/img/800x600/odamax/image/upload/gp4riwthczqz2vfabkk3.jpg',
      'https://images.odamax.com/img/800x600/odamax/image/upload/ixnzwupcf8biplppcgne.jpg',
    ],
  },
];

$(document).ready(() => {
  let finalHtml = ``;

  roomArr.forEach((key, index) => {
    finalHtml += `<div class="row d-flex flex-row justify-content-center align-items-center border mb-3">
  <div class="col-3">
    <img src="${key.img[0]}" alt="" width="200px" height="160px" />
  </div>
  <div class="col d-lg-none w-100"></div>
  <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-item-center">
    <span class="fw-bold text-primary">${key.name}</span>
    <span>${key.area}</span>
    
    <a href="" data-bs-toggle="modal" data-bs-target="#modal${index}"
      >Tüm Özellikler ve Fotoğraflar</a
    >
  </div>
  <div
    class="col-12 col-lg-3 d-flex flex-column mt-3 mt-md-0 justify-content-center align-items-center bg-light rounded-3"
  >
    <span>Fiyatlar İçin Tarih girin!</span>
    <button type="button" class="btn btn-warning" style="width: 120px">
      Tarih Seçin
    </button>
  </div>
</div>
<!-- Button trigger modal -->
<!-- Modal -->
<div
  class="modal fade"
  id="modal${index}"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${key.name}</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="container-flud">
          <div class="row">
            <div class="col-12">
              <div
                id="carouselExampleControls${index}"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="${key.img[0]}"
                      class="d-block w-100"
                      width="300px"
                      height="300px"
                      alt=""
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="${key.img[1]}"
                      class="d-block w-100"
                      alt=""
                      width="300px"
                      height="300px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="${key.img[2]}"
                      class="d-block w-100"
                      alt=""
                      width="300px"
                      height="300px"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls${index}"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls${index}"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-6">Bungalow 3 kişilik</div>
          </div>
          <div class="row d-flex flex-column p-2">
            <div class="col border-top fw-bold fs-6">Oda Olanakları</div>
            <div class="col">
              <ul>
                <li>Klima</li>
                <li>Tuvalet malzemeleri</li>
                <li>Havlu</li>
                <li>Banyo</li>
                <li>Gardrop</li>
              </ul>
            </div>
            <div class="col text-primary">*Bu olanaklar ücretlidir.</div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
          Tamam
        </button>
      </div>
    </div>
  </div>
</div>
`;
  });

  $('#hotelRoom').html(finalHtml);

  //$(h1).appendTo('.room');

  $('.hello').click(() => {
    console.log('hi');
  });
  //$(div).append(h1).appendTo('.room');
});
