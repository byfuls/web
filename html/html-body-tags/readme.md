* HTML Element - 컨텐츠 구분 & 문자 콘텐츠

header
    - 소개나 탐색을 돕는 도구
    - header와 footer는 후손이 될 수 없다
    - 전역 속성만을 포함

footer
    - 가장 가까운 구획화 콘텐츠나 구획화 루트의 푸터
    - 작성자 구휙, 저작권 데이터, 관련된 문서의 링크
    - 가장 밑에있는 내용
    - 기타 내용은 header와 비슷

h1-h6
    - 6단계의 문서 제목을 구현
    - 제목 폰트 크기 줄이기 위해 낮은 단계 사용하지 말고 css의 font-size속성을 사용
        즉, 태그로 구조를 잡을 뿐 css에서 디테일하게 설정
    - 제목 단계를 건너뛰지 말라, h1 -> h2 -> h4, h3를 건너 뛰지말라
    - h1은 여러개 쓰지 않는걸 추천, 즉 대제목은 하나만

main
    - 문서나 앱 body의 주요 컨텐츠를 나타냄
    - 그 페이지에 대한 핵심적인 내용이 main 태그에 기입된다
    - main태그도 그 페이지에서 하나만 존재
    - IE에서는 지원하지 않는다

article
    - 독립적으로 구분되거나 재사용 가능한 영역을 설정
    - 제목 포함 가능 (h1..h6)
    - 특정 기사의 묶음
    - display: block;
    - 대체할 태그로는 section, div, ...
    - article 내부에 section을 넣을 수 있다

section
    - 문서의 일반적인 영역을 설정
    - 제목 포함 가능 (h1..h6)
    - display: block;
    - section 내부에 article 넣을 수 있다
    - section과 div 모두 영역을 구분하는것은 같지만,
        section은 의미가 있기에 제목이 포함가능하지만,
        div는 의미가 없기때문에 더 너프한 느낌 (오히려 article이 section보다 더 강한 느낌)

aside
    - 문서의 별도 콘텐츠를 설정
        (광고, 배너, 기타 링크 등 사이드바(side bar))
    - display: block;

nav
    - 다른 페이지 링크를 제공하는 영역
        (보통 메뉴 home about ... 목차, 색인 등 설정)
    - display: block;
    - ol, ul 태그와 보통 많이 쓰임

address
    - body, article, footer 등에서 연락처 정보를 제공하기 위해 포함하여 사용
    - display: block;

div
    - 본질적으로 아무것도 나타내지 않는 콘텐츠 영역
    - 꾸미는 목적으로 사용
    - 의미가 따로 없고 막 사용할 수 있다
    - display: block;

ol, ul, li
    - 각 항목 <li>의 정렬된 목록 <ol>이나 정렬되지 않은 목록 <ul> 을 설정
    - <ol>과 <ul>은 자식으로 <li>만 포함 가능
    - <li>은 단독으로 사용 불가
    - ol, ul { display: block; }
    - li { display: list-item; } (block 요소)

dl, dt, dd
    - 용어의 집합
    - 용어(<dt>)와 정의(<dd>) 쌍들의 영역(<dl>)을 설정
    - <dl>
        <dt>...</dt>
        <dd>...</dd>
        <dd>...</dd>
      </dl>
    - dl 태그안에는 dd와 dt만 포함 (ex. div가 들어가면 안된다)
      style하기가 좀 힘들다.
      ul, li 로 대체해서 사용하곤 한다 (+<dfn></dfn> 용어 정의태그와 <p></p>태그를 사용해서 교체 가능)
    - key - value 형태 표시할때 유용
    - display: block;

p
    - 하나의 문단을 설정
    - display: block;

hr ( <hr /> )
    - 문단의 분리를 위해 설정
    - 수평선 (시각적인것이 아닌 의미적으로 사용하는것을 추천)
    - display: block;

pre
    - 서식이 미리 지정된 텍스트를 설정
    - 텍스트의 공백과 줄바꿈을 유지하여 표시
    - display: block;
    - 코딩할때 가독성을 위해 tab을 한것도 그대로 표시되기때문에 안쪽으로 붙히고 <pre>를 바로붙혀서 사용하곤 한다
    - DB에 코드를 넣고 그대로 표현하고자할때 사용하기도 한다

blockquote
    - 일반적인 인용문을 설정
    - 사용하는 속성으로는 cite 속성으로 url 값을 전달하곤 한다
    - display: block;

* HTML Element - 인라인 텍스트 & 수정

a
    - 다른 페이지로링크를 걸어 줄때 사용 (url로 연결할 수 있는 하이퍼링크를 설정)
    - download / 이 요소가 리소스를 다운로드하는 용도로 사용됨을 의미 / boolean
      href / 링크 URL / URL (생략 가능)
      hreflang / 링크 URL 언어 / ko, en, ...
      rel / 현재 문서와 링크 URL의 관계 / license, prev, next, ...
      target / 링크 URL의 표시(브라우저 탭) 위치 / _self, _blank (기본값 _self)
      type / 링크 URL의 MIME 타입 / text/html, ...
    - display: inline;
    - 버튼형식으로 많이 쓰임 (inline요소기에 button형식으로 사용되기때문에 block으로 바꿔서 사용한다)
    - 같은 페이지로 이동 가능 (해시태그 # 활용)
      <a href="#target1">제목1</a>
      ...
      <h2 id="target1">제목1</h2>
      특정 위치로 점프하며 이동하게 할 수 있다
      (ex. https://byfuls.com/atags#target1)

abbr
    - 약어를 지정
    - title 속성을 사용하여 전체 글자나 설명을 제공
    - display: inline;

b, mark, em, strong, i
    *b
        - 문체가 다른 글자의 범위를 설정
        - 글자가 두껍게 표시
        - 특별한 의미를 가지지 않음
        - 읽기 흐름에 도움을 주는 용도로 사용
        - 다른 태그 적합하지 않은 경우 마지막 수단으로 사용
        - display: inline;
    *mark
        - 사용자의 관심을 끌기 위해 하이라이팅할 때 사용
        - 글자 배경이 노란색으로 표시됨
        - 관심있는 부분을 표시하는 것과 같은 의미
        - display: inline;
    *em
        - 단순한 의미 강조를 표시
        - 중첩 가능, 중첩될수록 강조 의미가 강해짐
        - 이탤릭체로 표시됨
        - display: inline;
    *strong
        - 의미의 중요성을 나타내기 위해 사용
        - 글자가 두껍게 표시
        - display: inline;
    *i
        - 위 태그등에서 표현할 수 있는 적합한 의미가 아닌 경우 사용
        - 아이콘이나 특수기호같은 일반적이지 않은 것을 표현하기 위해 사용
        - 이탤릭체로 표시됨
        - display: inline;

dfn
    - 용어를 정의할때 사용
    - display: inline;
    - dl, dt, dd는 용어들과 설명할것이 많을 때 사용하지만, dfn는 특정 언어만 정의할 때 사용하곤 한다

cite
    - 창작물에 대한 참조를 설정
      (책, 논문, 영화, 노래, 게임 등의 제목)
    - 이탤릭체로 표시
    - display: inline;

q
    - 짧은 인용문을 설정
    - blockquote도 인용문이지만 짧으면 q를 사용하곤 한다
    - cite속성으로 사용해 url 연결 가능하다
    - display: inline;

u
    - 밑줄이 있는 글자를 설정
    - 순수하게 꾸미는 용도의 요소로 사용
    - css에서 충분히 활용할수 있기때문에 권장을 하지 않음
      (ex. <span style="text-decoration: underline;">)
    - display: inline;

code
    - 컴퓨터 코드 범위를 설정
    - 프로그래밍 코딩내용을 그대로 표시
    - display: inline;

kbd
    - 텍스트 입력 장치(키보드)에서 사용자 입력을 나타내는 텍스트 범위 설정
    - display: inline;

sup, sub
    - 위 첨자(<sup>)와 아래첨자(<sub>)를 설정
      (H2O, 제곱, 등)
    - display: inine;

time
    - 날짜나 시간을 나타내기 위한 목적
    - datetime 속성으로 "유효한 날짜 문자"형식을 전달한다
    - IE 지원 불가
    - display: inline;

span
    - 본질적으로 아무것도 나타내지 않은 콘텐츠 영역을 설정 (div와 비슷, 대신 블록이지만 span은 인라인)
    - display: inline;

br
    - break의 약어, 줄바꿈
    - display: inline;

del, ins
    *del
        - 원래 있지만 삭제한것처럼 보여주기 위해 텍스트 범위를 지정
         (가로선이 그어짐)
        - 속성 cite / 변경을 설명하는 리소스의 URI / URI
        - 속성 datetime / 변경이 일어난 유효한 날짜 문자 / Date
        - display: inline;
    *ins
        - 원래 없었지만 생성된것처럼 보여주기 위해 텍스트 범위를 지정
         (밑줄선이 그어짐)
        - 속성 cite / 변경을 설명하는 리소스의 URI / URI
        - 속성 datetime / 변경이 일어난 유효한 날짜 문자 / Date
        - display: inline;

*HTML Element - 멀티미디어 & 내장 콘텐츠 & 스크립트

img
    - 이미지를 삽입
    - 속성
        src / (필수) 이미지 URL / URL
        alt / (필수) 이미지의 대체텍스트 
        width / 이미지의 가로 너비
        height / 이미지의 세로 너비
        srcset / 브라우저에게 제시할 이미지 URL과 원본 크기의 목록을 정의 / w, x (반응형에 쓰임)
        sizes / 미디어 조건과 해당 조건일 때 이미지 최적화 크기의 목록을 정의 / (반응형에 쓰임)
        (example)
        <img
            srcset="images/byfuls_small.png 400w,
                    images/byfuls_medium.png 700w,
                    images/byfuls_large.png 1000w"
            sizes="(max-width: 500px) 444px,
                    (max-width: 800px) 777px,
                    1222px"
            src="images/byfuls.png"
            alt="BYFULS" />
        sizes는 최적화된 조건 
        srcset은 출력될 이미지 목록 (경로와 이미즤 원본 크기 제공 해야함), 작은 크기 이미지부터 순서대로 입력
            브라우저에서 srcset를 사용하지 못한다면 src에 지정된 값을 사용한다
        w 단위(Width descriptor)는 이미지의 원본 크기(가로 너비)를 의미
        (ex. 400x300(px) 크기 이미지의 w 값은 400w 이다)
        고정된 크기를 유지하려면 width 속성을 사용할 수 있다 (대신 출력되는 이미지는 속성에 지정한 이미지 파일이 출력된다. 화면 크기만 유지할 뿐!)
        x 단위(Device pixel ratio descritor)는 이미지의 비율 의도를 의미
        (w 단위를 사용하면 x 단위를 사용할 필요가 없다. 대부분의 경우 w 단위를 사용하면 된다)
        <주의> srcset과 sizes는 IE에서 지원하지 않는

audio
    - 속성
        autoplay / 준비되면 바로 재생 / boolean
        controls / 제어 메뉴를 표시 / boolean
        loop / 재생이 끝나면 다시 처음부터 재생 / boolean
        preload / 페이지 로드될 때 파일을 로디할지의 지정 / none: 로드하지않음, metadata: 메타데이터만 로드, auto: 전체파일 로드 / 기본값 metadata
        src / 컨텐츠 url / URL
        muted / 음소거 여부 / boolean
    - display: inline;

video
    - 속성
        autoplay / 준비되면 바로 재생 / boolean
        controls / 제어 메뉴를 표시 / boolean
        crossorigin / 가져 오기가 CORS를 사용하여 수행되어야하는지 여부 / anonymous, use-credentials
        loop / 재생이 끝나면 다시 처음부터 재생 / boolean
        muted / 음소거 여부 / boolean
        poster / 동영상 썸네일 이미지 URL / URL
        src / 컨텐츠 url / URL
        width / 동영상 가로 너비
        height / 동영상 세로 너비
    - display: inline;

figure, figcaption
    - figure는 이미지나 삽화, 도표 등의 영역을 설정
    - figcaption은 figure에 포함되어 이미지나 삽화 등의 설명을 나타낸다
    - figure { display: block; }
      figcaption { display: inline; }

iframe
    - 다른 HTML 페이지를 현재 페이지에 삽입
      (중첩된 브라우저 컨텍스트(프레임)을 표시)
    - 속성
        name / 프레임의 이름
        src / 포함할 문서의 URL / URL
        width / 프레임의 가로 너비
        height / 프레임의 세로 너비
        allowfullscreen / 전체 화면 모드 사용 여부 / boolean
        frameborder / 프레임 테두리 사용 여부 / 0, 1
        sandbox / 보안을 위한 읽기 전용으로 삽입 / allow-form: 양식 제출 가능, allow-scripts: 스크립트 실행 가능, allow-same-origin: 같은 출처(도메인)의 리소스 사용 가능
    - 유투브 영상을 우클릭해서 소스 복사 하게되면 iframe 형식으로 복사되게 된다

canvas
    - Canvas API나 WebGL API를 사용하여 그래픽이나 애니메이션을 랜더링
    - 속성
        width / 캔버스 가로 너비
        height / 캔버시 세로 너비
    - display: inline;

script
    - 스크립트 코드를 문서에 포함하거나 참조 (외부 스크립트)
    - 속성
        async / 스크립트의 비동기적 실행 여부 / boolean / src 속성 필수
        crossorigin / 별도의 도메인을 사용하는 사이트(CORS)의 오류 로깅을 허용하기 위해 사용 / anonymous, use-credentials
        defer / 문서 파싱(구문 분석) 후 작동 여부(HTML문서 다 파악 후 스크립트를 실행해라) / boolean / src 속성 필수
        src / 참조할 외부 스크립트 URL / URL / 외부 소스를 가져오게 된다면, script 태그 내부에 포함된 스크립트 코드는 무시된다
        type / MIME 타입 / text/javascript

nonscript
    - 스크립트를 지원하지 않는 경우에 삽입할 HTML을 정의

* HTML Element - 표 컨텐츠 & 양식

table, tr, th, td
    - 테이블 표(<table>)의 행(줄/<tr>)과 열 (칸, 셀, th, td) 생성
    - table { display: table; }
      tr { display: table-row; }
      th, td {display: table-cell; }
    - th 속성
        abbr / 열에 대한 간단한 설명
        headers / 관련된 하나 이상의 다른 머리글 칸 id 속성 값
        colspan / 확장하려는(병합) 열의 수 / 기본값 1
        rowspan / 확장하려는(병합) 행의 수 / 기본값 1
        scope / 자신이 누구의 '머리글 칸' 인지 명시 / col: 자신의 열, colgroup: 모든 열, row: 자신의 행, rowgroup:모든 행, auto / 기본값 auto
    - td 속성
        headers / 관련된 하나 이상의 다른 머리글 칸 id 속성 값
        colspan / 확장하려는(병합) 열의 수 / 기본값 1
        rowspan / 확장하려는(병합) 행의 수 / 기본값 1

caption
    - 열리는 table 태그 바로 다음에 작성해야 한다
    - table당 하나의 caption만 사용 가능
    - display: table-caption;

clogroup, col
    - 표의 열들을 공통적으로 정의하는 컬림(<col>) 과 그의 집합(<colgroup>)
    - 속성
        span / 연속되는 열 수 / 숫자 / 기본값 1
    - colgroup { display: table-column-group; }
    - col { display: table-column; }

thead, tbody, tfoot
    - 표의 머리글(<thead>), 본문(<tbody>), 바닥글(<tfoot>)을 지정
    - 테이블의 레이아웃에 영향을 주지 않음
    - thead { display: table-header-group; }
      tbody { display: table-row-group; }
      tfoot { display: table-footer-group; }

form
    - 웹 서버에 정보를 제출하기 위한 양식 범위
    - form 태그는 다른 form 태그를 자식 요소로 포함할 수 없다
    - 속성
        action / 전송한 정보를 처리할 웹페이지의 URL / URL
        autocomplete / 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 / on, off / 기본값 on
        method / 서버로 전송할 HTTP 방식 / GET, POST / 기본값 GET
        name / 고유한 양식의 이름
        novalidate / 서버로 전송시 양식 데이터의 유효성을 검사하지 않도록 지정
        target / 서버로 전송 후 응답받을 방식을 지정 / _self, _blank / 기본값 _self
    - display: block;

input
    - 사용자에게 입력 받을 데이터 양식
    - 속성
        autocomplete / 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 / on, off / 기본값 on
        autofocus / 페이지가 로드 될 때 자동으로 포커스 / boolean / 문서 내 고유해야 함
        checked / 양식이 선택되었음을 표시 / boolean / type 값이 radio, checkbox일 경우에만
        form / <form>의 id 속성 값 / / 해당 <form>의 후손이 아닐 경우만 (form 안에 정의하지 않고 밖에 있어도 form id와 form속성을 연결시켜주면 된다)
        name / 양식의 이름 / / 서버로 보낼때 이 양식이 어떤 데이터인지 같이 알려줌 (name=id로 설정해놓으면 입력된 값이 서버로 보내질때 id=블라블라 로 전송됨)
        type / 입력 받을 데이터의 종류 / 아래 별도 정리 / text
        value / 양식의 초기 값
        readonly / 읽을수만 있고 수정할 수 없다 (포커스는 된다)
        disabled / 아예 포커스 조차 되지 않는다
        placeholder / 사용자에게 전달하는 힌트 내용
        max / type이 숫자이고 max가 8이라면 최대 값 설정 범위
        min / 같은 이치
        step / 4라고 설정하면 4단위로 증가 및 감소 (step="4")
        checked / type="checkbox" 에서 기본값이 체크 되어있을 때
        multiple / type="file" 에서 여러개의 파일을 선택할때
        src / type="image"에서 src에 이미지를 지정할 수 있다 (즉 이미지를 submit이나 button으로 사용할 수 있다)
        ...
    - type 종류의 값
        button / 일반 버튼 / <button> 처럼 사용 (일반 버튼은 기능이 없기에 js로 해줘야함)
        checkbox / 체크 박스
        radio / checkbox와 비슷하지만 radio는 선택 후 취소가 안된다. 즉 여러개중에 선택하는 개념이기에 name 속성에 같은 이름을 설정해줘야한다 (그래야 서버에 제출할때 어떤게 선택됫는지 그 값을 전송할 수 있기에)
        email / 이메일
        file / 파일
        password / 비밀번호 / 가려지는 양식
        submit / 제출 버튼 / 해당 <form> 범위 내 고유한 양식
        text / 일반 텍스트
        number / 숫자 값
        reset / form태그 범위안에서만 데이터를 초기화 할 때 사용
        ...

label
    - 라벨 가능 요소의 제목
    - button, input, progress, select, textarea에 사용 가능
    - display: inline;

button
    - 선택 가능한 버튼을 지정
    - 속성
        autofocus / 페이지가 로드될 때 자동으로 퍼커스 / boolean / 문서 내 고유해야 함
        disabled / 버튼 비활성화 / boolean
        form / <form>의 id 속성 값으로 연결
        name / 폼 데이터와 함께 전송되는 버튼의 이름
        type / 버튼 타입 / button, reset, submit
        ...
        onclick / js 함수명 설정, 그럼 버튼이 클릭됫을때 자바스크립트 함수를 실행한다
    - display: inline-block;

textarea
    - 여러 줄의 일반 텍스트 양식
    - 속성
        ... input과 비슷
        rows / 양식의 줄 수 / 숫자 / 기본값 (2)

fieldset, legend
    - 같은 목적의 양식을 그룹화(<fieldset>)하여 제목(<legend>)을 지정
    - fieldset 속성
        disabled / 그룹 내 모든 양식 요소를 비활성화 / boolean
        form / <form>의 id 속성값으로 연결해서 밖에서도 사용 가능
        name / 그룹의 이름

select, datalist, optgroup, option
    - 옵션(<option>, <optgroup>)의 선택 메뉴(<select>)나 자동완성(<datalist>)을 제공
    - select 속성
        autocomplete / 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 / on, off / 기본값 on
        disabled / 선택 메뉴를 비활성화 / boolean
        form / <form>의 id 속성값으로 연결해서 밖에서도 사용 가능
        multiple / 다중 선택 여부 / boolean
        name / 선택 메뉴의 이름
        size / 한 번에 볼 수 있는 행의 개수 / 숫자 / 0(1과 같음)
    - optgroup 그룹화 속성
        label / (필수)옵션 그룹의 이름
        disabled / 옵션 그룹의 비활성화 / boolean
    - option 속성
        선택 메뉴(<select>)나 자동완성(<datalist>)에서 사용될 옵션
        선택적 빈(empty) 태그로 사용 가능
        disabled / 옵션을 비활성화 / boolean
        label / 표시될 옵션의 제목
        selected / 옵션이 선택되었음을 표시 / boolean
        value / 양식으로 제출될 값 / 생략되면 포함된 텍스트를 값으로 사용
    - datalist
        <input>에 미리 정의된 옵션을 지정하여 자동완성(autocomplete) 기능을 제공하는 데 사용
        <input>의 list 속성 바인딩
        <option>을 포함하여 정의된 옵션을 지정

progress
    - 작업의 완료 진행률을 표시 (로딩바) 
    - 속성 (자바스크립트에서 많이 쓰임)
        max / 작업의 총량 / 숫자
        value / 작업의 진행량 / 숫자 / max 속성을 생략할 경우 0~1사이의 숫아여야 함

* HTML - 전역 속성, 기타
모든 HTML 요소에서 공동적으로 사용 가능한 속성

[전역속성] class (별명)
    - 공백으로 구분된 요소의 별칭을 지정
    - CSS or JS에서 요소를 선택하는 방법으로 사용
    - 중복 가능

[전역속성] id (이름(고유))
    - 문서에서 고유한 식별자를 정의
    - CSS or JS에서 요소를 선택하는 방법으로 사용
    - 중복 불가

[전역속성] style
    - 요소에 적용할 css를 선언

[전역속성] title
    - 요소의 정보(설명)을 지정
    - 요소들의 속성으로 사용 가능 (div title="블라블라", a title="블라블라", ...)
    - 마우스 오버했을때 팁으로 나옴

[전역속성] lang
    - 요소의 언어(ISO 639-1)을 지정
    - title과 같이 요소들의 속성으로 사용 가능

[전역속성] data-*
    - 사용자 정의 데이터 속성을 지정
    - HTML에 JS에서 이용할 수 있는 데이터(정보)를 저장하는 용도로 사용
    - example
        <!-- HTML -->
        <div id="me" data-my-name="byfuls" data-my-age="851">Byfuls</div>
        // JS
        const $me = document.getElementById("me");
        console.log($me.dataset.myName);    // "Byfuls"
        console.log($me.dataset.myAge);     // "851"

[전역속성] draggable
    - 요소가 drag and drop api를 사용 가능한지 여부를 지정
    - 기본값은 auto (브라우저가 판단해서 설정)

[전역속성] hidden
    - 요소를 숨김
    - input 태그에 기본값을 넣어넣고 hidden 속성으로 화면에만 가려지게끔 하고, 서버에는 기본값을 전송하게끔 하는 방법이 있음
     (숨겨지지만 동작은 가능)
[전역속성] tabindex
    - 탭 키를 이용해 요소를 순차적으로 포커스 탐색할 순서를 지정 (html에서 작성된 대로 순서를 따름)
    - 대화형 콘텐츠는 기본적으로 코드 순서대로 탭 순서가 지정됨
        (MDN 대화형 컨텐츠 확인)
    ...