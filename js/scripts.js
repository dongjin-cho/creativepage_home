/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // win/mobile 구분
  /* var filter = "win16|win32|win64|macintel|mac|"; // PC일 경우 가능한 값
  if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
          //alert("모바일에서 접속하셨습니다");
          $("#pcdownload").addClass("col-md-10_hidden");
      } else {
          //alert("PC에서 접속하셨습니다");
          $("#mobiledownload").addClass("col-md-10_hidden");
      }
  } */
  if (navigator.userAgent.indexOf('iPhone') != -1) {
    addEventListener("load", function() {
      setTimeout(hideURLbar, 0);    }, false);
    }
  //아이폰이 아닌경우
  else {
    hideURLbar();
  }
  function hideURLbar() {
    window.scrollTo(0, 1);
  }

  // [모바일로 접속시 모바일장치구분 하여 모바일 페이지로 이동]
  // var userAgent = navigator.userAgent;
  // // alert(userAgent);

  // // 스마트폰에서 이 코드를 실행하면 브라우저와 관련된 정보 표시
  // // 아이폰 : iPhone
  // // 윈도우폰 : IEMobile
  // // 안드로이드 : Android
  // // 등등으로 스마트폰 구분
 
  // //변수선언
  // var smartPhones = [
  //   'iphone', 'ipod',
  //   'windows ce',
  //   'android','blackberry',
  //   'nokia','webos',
  //   'opera mini','sonyerricsson',
  //   'opera mobi','iemobile'
  // ];

  // for(var i in smartPhones){
  //   if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))){
  //     //alert('this is Smart Phone...!');
  //     document.location = 'http://34.95.52.206/mobile.html';
  //   }
  // }

  
  /*

	
[모바일코딩]기본설정
[모바일 제작 팁]
1. 최대한 텍스트와 css로 제작
2. 이미지는 백그라운드로 삽입
3. a태그에 block속성 주기
4. 최근의 해상도 높은 기기에 맞춰 640px사이즈로 제작하여 background-size를 이용하여 사이즈 조정
640px 으로 나온 디자인 시안을 이미지로 쓰일 부분만 자르고 나머지를 320px로 줄여서 여백, 선굵기 등을 체크하여 100%로 작업
5. 미디어 쿼리별로 css제작
6. body에 ontouchstart="" 속성을 추가해 주시면, active 효과가 적용

[모바일 코딩 기본 소스]
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<title>Mobile Coding</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
//숫자인식,메일주소,지도상의 주소링크 막기
<meta name="format-detection" content="telephone=no, address=no, email=no" />
//북마크 추가시 바탕화면에서 볼수있는 아이콘 이미지(png저장)
<link rel="apple-touch-icon" href="이미지경로.png" /> 
</head>
<body>
</body>
</html>

[모바일 전화걸기 , 문자 보내기 링크]
전화걸기    : <a href="tel:1234-1234 ">전화걸기</a>
문자보내기 : <a href="sms:010-1234-1234">문자보내기</a>
 ☞모바일 뷰포트설정바로가기

[CSS]
*{-webkit-text-size-adjust:none} 아이폰 가로모드 글자 커지는 것 방지
안드로이드에서 input 박스가 레이어를 뚫고 올라올때
body{-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}

안드로이드에서 placeholder이 적용안될때
[오류]
<input type="number"> ->숫자패드 올라옴 단, placeholder 적용이 안됌
[변경]
<input type="text" placeholder="메일주소 입력" onfocus="this.type='number';">
터치전에는 type="text" 터치하면 number 로 바뀌게 되는것이다. 


모바일 코딩시  line-height보다는 padding 값으로 조절. 모바일 하위버전에서 가운데 정렬이 안되는 경우가 생김
[오류]
 line-height:20px; 일때 가운데가 아닌 위로 텍스트가 붙는 현상
[변경]
padding값으로 맞춰준다.


가로 메뉴가 홀수일때
[오류]
가로메뉴가 짝수일때는 상관이 없지만, 홀수일때 가로 100%일때 딱 맞아떨어지지가 않는다.
[해결]
li{width:33%}
li:last-child {width:34%}

iOS 사파리의 label 태그버그 해결방법
iOS 사파리는 다음 코드에서 label태그를 눌러도 아무런 반응이 없다. 버그를 해결하려면 label 태그에 onclick 속성을 입력
<label for="name" onclick="">Name</label><input id="name" type="text" />


반응형웹 모바일 기기별 코딩하기
1.모바일은 세로모드, 가로모드가 있기 때문에 분리를 해주는 것이 좋다.
세로모드 : @media screen and (orientation: portrait){
}
가로모드 : @media screen and (orientation: landscape){
}

2. 디바이스 해상도별 분리
기본 : @media screen and (-webkit-device-pixel-ratio: 1){
} //아이폰3g , 갤럭시 예전버전

1.5배 : @media screen and (-webkit-device-pixel-ratio: 1.5){
} //갤럭시 시리즈, SKY폰

두배 : @media screen and (-webkit-device-pixel-ratio: 2){
} //아이폰4 갤S3~노트


================================================================
================================================================


[모바일코딩/메타태그]뷰포트(viewport) 개념 / 메타태그 

컴퓨터나 휴대 단말기 등 장치에 DISPLAY 요소가 표현되는 영역

뷰포트 속성
width, height : px 단위 기본 960px
initial-scale : 초기 배율, (기본값 : 꽉 찬 화면)
minimum-scale : 최소 배율 0~10.0
maximum-scale : 최대배율 0~10.0
user-scalable : 확대 축소 여부 : yes/no

뷰포트 메타태그
뷰포트의 설정을 변경하기 위해 메타태그 형태로 지원된다
<meta name="viewport" content="width=device-width" /> //모바일 단말기 장치의 가로 폭으로 설정

포털 등 기 개발된 모바일 웹 사이트에서 설정한 뷰포트 태그
1) m.naver.com
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi" />

2) m.daum.net
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />

position:fixed 오류 문제 해결
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
//user-scalable=no : 안드로이드에서 레이어를 띄웠을때 position:fixed 적용시 안드로이드 하위버전에서는 고정이 안되는 버그가 있다. 그럴때 해결

메타태그(META-TAG) 
//웹 앱으로 실행 할때, 일반 앱처럼 보이도록 사파리 브라우저의 ui를 안나타나게 해주는 역할
<meta name="apple-mobile-web-app-capable" content="yes">
<meta content="경로/apple-touch-icon-precomposed.ico">

아이콘등록(LINK-ICON) 
//아이폰 북마크 아이콘 (114*114로 지정하면 리사이징)
<link rel="apple-touch-icon-precomposed" href="경로/apple-touch-icon-precomposed.png">
//파비콘 등록(114*114)
<link href="경로/apple-touch-icon-precomposed.ico" rel="shortcut icon" type="image/x-icon">


===============================================================
===============================================================

[mobile코딩/모바일 웹] 아이폰/ 안드로이드 주소창 숨기는 방법

아이폰은 메타태그로, 안드로이드는 자바스크립트를 사용.
- 아이폰 :
<meta name=”apple-mobile-web-app-capable” content=”yes” />

- 안드로이드 자바스크립트 :
// 주소창 숨기기 아이폰인 경우
if (navigator.userAgent.indexOf('iPhone') != -1) {
	addEventListener("load", function() {
		setTimeout(hideURLbar, 0);    }, false);
	}
//아이폰이 아닌경우
else {
	hideURLbar();
}
function hideURLbar() {
	window.scrollTo(0, 1);
}

===============================================================
===============================================================

[모바일로 접속시 모바일장치구분 하여 모바일 페이지로 이동]
var userAgent = navigator.userAgent;
alert(userAgent);

스마트폰에서 이 코드를 실행하면 브라우저와 관련된 정보 표시
아이폰 : iPhone
윈도우폰 : IEMobile
안드로이드 : Android
등등으로 스마트폰 구분

<script type="text/javascript">
//변수선언
var smartPhones = [
	'iphone', 'ipod',
	'windows ce',
	'android','blackberry',
	'nokia','webos',
	'opera mini','sonyerricsson',
	'opera mobi','iemobile'
];

for(var i in smartPhones){
	if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))){
		alert('this is Smart Phone...!');
		document.location = 'http://m.naver.com'; //모바일접속일때 모바일사이트로 이동
	}
}
</script>

===============================================================
===============================================================

[모바일코딩/참고사이트] 모바일코딩을 도와주는 사이트 모음
다음트로이 - 다양한 모바일 해상도 테스트-http://troy.labs.daum.net/
모바일 폰트사이즈 em - px을 em으로 바꿔주는 사이트 - https://www.w3schools.com/tags/ref_pxtoemconversion.asp
모바일 체크박스 CSS수정하는 방법 - http://webdir.tistory.com/433
CSS3 선택자 설명-https://developer.mozilla.org/en-US/docs/Web/CSS/:active
아이폰, 아이패드 해상도 테스트(사파리에서 테스트할것)-http://ipadpeek.com/ 
파비콘(ico) 만들기-http://favicon-generator.org/

===============================================================
===============================================================

*/
  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
