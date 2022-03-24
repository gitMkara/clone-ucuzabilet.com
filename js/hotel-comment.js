const commentArr = [
  {
    puan: 9.3,
    comment:
      'Cennet gibi bir yerdi. Kafayı dinlemek isteyenler gidebilirler. Küçük bir pansiyon olmasına rağmen otel kalitesindeydi. Otoparkı vardı. Temizlik iyiydi. Konumu iyiydi.',
  },
  {
    puan: 8.7,
    comment:
      'Personel sıcak kanlı. Yemek iyiydi. Orta düzeydeydi. Bunun haricinde otelde bir şey yoktu. Konumu sahile güzeldi. Temizlik covid önlemleri iyiydi.',
  },
  {
    puan: 10.0,
    comment:
      'Güzel bir tesisti. Aile tesisiydi. Konumu rahattı. Kafa dinlemelik bir yerdi.',
  },
  {
    puan: 7.0,
    comment:
      'O tesisin yakınlarında daha iyi tesisler vardı. Tesiste 18 yaş altı çocuklar vardı çok gürültü yapıyorlardı. Tek beğendiğim yönü işletmeciler ve çalışanlar iyiydi.',
  },
];

$(document).ready(function () {
  let htmlStr = ``;
  let totalPuan = 0;
  commentArr.forEach((key) => {
    totalPuan += key.puan;
    const degree = key.puan > 8.5 ? 'Çok İyi' : 'İyi';
    htmlStr += `<div class="col p-4">
  <div class="row">
    <div class="col-6 d-flex flex-row align-self-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-person-workspace"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        />
        <path
          d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"
        /></svg
      ><span class="fw-bold fs-6 ms-2">Misafir</span>
    </div>
    <div class="col-6 d-flex justify-content-end fw-bold fs-7 text-primary">
      <span class="puan me-2">${key.puan}</span>
      <span class="degree">${degree}</span>
    </div>
  </div>
  <div class="row">
    <div class="col mt-2 border-bottom">
      <p class="comment">${key.comment}</p>
    </div>
  </div>
</div>`;
  });
  const numberOfComment = commentArr.length;
  const averagePuan = totalPuan / numberOfComment;
  const averageDegree = averagePuan > 8.5 ? 'Çok İyi' : 'İyi';
  console.log(averagePuan);
  $('#averagePuan').text(averagePuan);
  $('#averageDegree').text(averageDegree);
  $('#numberOfComment').text(numberOfComment + ' yorum');

  $('#commentBlock').html(htmlStr);
});
