(function(){

  $(document).ready(init);

  function init() {
    $('#youngpre').click(getScratchPre);
    $('#youngpost').click(getScratchPost);
    $('#legion').click(getLegion);
    $('#techpre').click(getWebdevPre);
    $('#techpost').click(getWebdevPost);
  }

  var unitypre = "https://docs.google.com/forms/d/e/1FAIpQLSed2R0WrAcJBiYq4JEcu7T9vTHNni_orB3uY9c27x1Qrx-OaA/viewform?usp=sf_link";
  var unitypost = "https://docs.google.com/forms/d/e/1FAIpQLSfBmXzyVKEz005B8aOzFg9Uasitb5L8ii0HW8ET15b9fsxRpg/viewform?usp=sf_link";
  var webpre = "https://docs.google.com/forms/d/e/1FAIpQLSfz5Q7XzcB3vRGC4cPlK2f5UVjZ5NIbhiK7Cn1BNtjmtKozWQ/viewform?usp=sf_link";
  var webpost = "https://docs.google.com/forms/d/e/1FAIpQLScj2disLPibXtCLZcJYDTpBi8g-6jpUyaTmzLkkh4G-3JJJrA/viewform?usp=sf_link";
  var scratchpre = "https://docs.google.com/forms/d/e/1FAIpQLSfvsNvOmIaQUUzvd_1Olts9erZtDdBOKm6_hFZ-PjkIova7wg/viewform?usp=sf_link";
  var scratchpost = "https://docs.google.com/forms/d/e/1FAIpQLSddQywEZUa3HqWaVgAh-qp40-Ya3a1ijaA3P6uilNHtW8Nc0A/viewform?usp=sf_link";
  var legion = "https://docs.google.com/forms/d/1QBAknK1_7QSnuxH_C5D5i8RWg4vk0-y2mD9aEKoQFwg/edit"


  function getWebdevPre() {
    window.location.href = webpre;
    }

  function getWebdevPost() {
    window.location.href = webpost;
    }

  function getScratchPre() {
    window.location.href = scratchpre;
    }

  function getScratchPost() {
    window.location.href = scratchpost;
    }

  function getLegion() {
    window.location.href = legion;
  }












})();
