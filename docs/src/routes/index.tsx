import { component$, useStylesScoped$, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import Swiper from 'swiper';
import 'swiper/css';

export default component$(() => {
  useStylesScoped$(styles);

  useClientEffect$(() => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  });

  return (
    <>
      <div className="wrap" window:onLoad$={(event) => {
        document.getElementById('name').classList.add('move');
        document.querySelectorAll('#title div')[0].classList.add('move');
        document.querySelectorAll('#title div')[1].classList.add('move');
        document.querySelectorAll('#title div')[2].classList.add('move');
        document.getElementById('more').classList.add('move');
      }}>
        <h1 id="name">Galmuri</h1>
        <h2 id="title">
          <div>작은 크기에서도</div>
          <div>가독성 좋고 균형 있는</div>
          <div>한글 비트맵 폰트</div>
        </h2>
        <small
          id="more"
          className="detail"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          아래로 스크롤하여 더 많은 내용 확인하기
        </small>
      </div>
      <div className="doc">
        <p>
          Galmuri는 닌텐도 DS 본체와 소프트웨어에 사용되었던 폰트 디자인에서 영감을 받은 비트맵 폰트입니다. 2019년 10월 9일 한글날에 처음 공개되었으며, Galmuri의 이름은 2008년 6월 사용자 한글화 커뮤니티인 <a href="https://cafe.naver.com/hansicgu" target="_blank">한식구</a>에서 김동한 님께서 만들어 배포하신 비트맵 폰트 ‘<a href="https://cafe.naver.com/hansicgu/174" target="_blank">갈무리M</a>’에서 유래하였습니다.
        </p>
        <div className="btns" style={{ whiteSpace: "nowrap" }}>
          <Link className="btn" href="/glyphs" style={{ flex: "initial" }}>
            문자 미리보기
          </Link>
          <Link className="btn" href="/charsets" style={{ flex: "initial" }}>
            문자 집합별 지원 현황
          </Link>
          <Link className="btn" href="/diff" style={{ flex: "initial" }}>
            주요 변경점
          </Link>
        </div>
        <h2>라이선스</h2>
        <p>
          Copyright © 2019-2022 Minseo Lee (itoupluk427@gmail.com), with reserved
          font name “Galmuri”.
        </p>
        <p>
          Galmuri는 <a href="https://scripts.sil.org/OFL" target="_blank">SIL 오픈 폰트 라이선스 1.1</a>에 따라 사용할 수 있으며, 폰트가 자체적으로 판매되지 않는 한 자유롭게 사용·연구·수정·재배포할 수 있습니다. 또한 어떠한 경우에도 저작권자는 계약·불법 행위 또는 기타 계약의 조치로 인한 일반·특수·간접·부수·결과적 손해를 포함하여 어떠한 청구·손해 또는 기타 책임도 지지 않습니다.
        </p>
        <p>
          OFL 1.1을 한국어로 번역한 내용은 <a href="https://github.com/quiple/galmuri/blob/main/OFL-ko.md" target="_blank">이곳</a>에서 확인할 수 있으며, 라이선스 원문은 <a href="https://github.com/quiple/galmuri/blob/main/OFL.md" target="_blank">이곳</a>에서 확인할 수 있습니다.
        </p>
        <h2>다운로드</h2>
        <div className="btns">
          <a
            className="btn"
            href="https://github.com/quiple/galmuri/releases/latest"
            target="_blank"
            style={{ flex: "initial" }}
          >
            GitHub 릴리스 페이지에서 다운로드하기
          </a>
        </div>
        <p>
          Galmuri14는 15px (11pt), Galmuri11은 12px (9pt), Galmuri9는 10px (7.5pt), Galmuri7은 8px (6pt) 크기와 그 배수에서 가장 명확하게 표시됩니다.
        </p>
        {/*<p>이름에 ‘Bitmap’이 붙은 파일은 윤곽선 데이터 없이 비트맵 스트라이크만 포함된 트루타입 폰트입니다. CrystalTile2에서 폰트 이미지를 삽입하는 등의 용도로 적합합니다.</p>*/}
        <h2>웹폰트로 사용</h2>
        <p style={{ marginBottom: 8 }}>HTML에서:</p>
        <pre>
          &lt;link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css"&gt;
        </pre>
        <p style={{ marginBottom: 8 }}>CSS에서:</p>
        <pre>
          @import
          url('https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css');
        </pre>
        <p style={{ marginBottom: 8 }}>CSS 규칙:</p>
        <pre>
          <span className="note">/* Galmuri14를 사용하려면 */</span>
          <br />
          font-family: 'Galmuri14';
          <br />
          <br />
          <span className="note">/* Galmuri11을 사용하려면 */</span>
          <br />
          font-family: 'Galmuri11';
          <br />
          <br />
          <span className="note">/* Galmuri11 Bold를 사용하려면 */</span>
          <br />
          font-family: 'Galmuri11';
          <br />
          font-weight: 700;
          <br />
          <br />
          <span className="note">/* Galmuri11 Condensed를 사용하려면 */</span>
          <br />
          font-family: 'Galmuri11';
          <br />
          font-stretch: condensed;
          <br />
          <br />
          <span className="note">/* Galmuri9를 사용하려면 */</span>
          <br />
          font-family: 'Galmuri9';
          <br />
          <br />
          <span className="note">/* Galmuri7을 사용하려면 */</span>
          <br />
          font-family: 'Galmuri7';
        </pre>
        <h2>사용할 수 있는 오픈타입 기능</h2>
        <p>합자 (liga)</p>
        <div className="fea liga">
          <pre>Affection Official Shuffle</pre>
          <pre>
            A<span>ff</span>ection O<span>ffi</span>cial Shu<span>ffl</span>e
          </pre>
        </div>
        <p>커닝 (kern)</p>
        <div className="fea kern">
          <pre>Test TV/Audio Million LTE</pre>
          <pre>
            <span>Te</span>st T<span>V/A</span>udio M<span>illi</span>on{" "}
            <span>LT</span>E
          </pre>
        </div>
        <p>고정폭 숫자 (tnum)</p>
        <div className="fea tnum">
          <pre>
            1,879,425원
            <br />
            2,624,560원
            <br />
            1,751,853원
          </pre>
          <pre>
            <span>1,879,425</span>원<br />
            <span>2,624,560</span>원<br />
            <span>1,751,853</span>원
          </pre>
        </div>
        <pre>
          font-variant-numeric: tabular-nums; 혹은 font-feature-settings: "tnum" 1;
        </pre>
        <p>슬래시 0 (zero)</p>
        <div className="fea zero">
          <pre>0123456789</pre>
          <pre>
            <span>0</span>123456789
          </pre>
        </div>
        <pre>
          font-variant-numeric: slashed-zero; 혹은 font-feature-settings: "zero" 1;
        </pre>
        <p>세로쓰기 (vert)</p>
        <div className="fea vert">
          <pre>
            「세로쓰기」는 한국어 환경에서 잘 사용되지 않는 관계로 문장부호 등도 모두 전각에 맞추어져 있습니다。「っ、ッ、ぁ、ヶ」 같은 스테가나도 세로쓰기에 맞는 모양으로 대체됩니다。
            <div className="vert-more">
              <br />
              세로쓰기 전용 글리프의 예）
              <br />
              <br />パ<span>ー</span>ソナルコンピ<span>ュー</span>タは
              <span>、</span>個人で使用するコンピ<span>ュー</span>タである
              <span>。</span>
              <br />
              <br />
              なんつ<span>っ</span>て<span>っ</span>つ<span>っ</span>ち
              <span>ゃっ</span>た<span>。</span>
              <br />
              <br />
              <span>（</span>小括弧<span>）｛</span>中括弧<span>｝［</span>大括弧
              <span>］</span>
              <br />
              <span>「</span>鉤括弧<span>」『</span>二重鉤括弧<span>』</span>
              <br />
              <span>〈</span>山括弧<span>〉《</span>二重山括弧<span>》</span>
              <br />
              <span>【</span>隅付き括弧<span>】</span>
            </div>
          </pre>
        </div>
        <pre>writing-mode: vertical-rl; 혹은 writing-mode: vertical-lr;</pre>
        <p>
          한자가 포함되지 않은 Galmuri14, Galmuri11 Bold, Galmuri11 Condensed는 세로쓰기를 지원하지 않습니다.
        </p>
        <h2>쇼케이스</h2>
      </div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="./images/showcase/not-yet.png" alt="Keylocker" />
            <span className="capt">
              <a href="https://store.steampowered.com/app/1325040" target="_blank">
                Keylocker
              </a>{" "}
              © Moonana
            </span>
          </div>
          {/*<div class="swiper-slide"><img src="./images/showcase/221106.png" alt="Kid Dracula"><span class="capt"><a href="https://blog.naver.com/devilucifer/222921095430" target="_blank">악마성 스페셜 - 나는 드라큐라군</a> (사용자 패치) by DQ군</span></div>*/}
          <div className="swiper-slide">
            <img
              src="./images/showcase/220621.jpg"
              alt="Shotgun King: The Final Checkmate"
            />
            <span className="capt">
              <a href="https://store.steampowered.com/app/1972440" target="_blank">
                Shotgun King: The Final Checkmate
              </a>{" "}
              © PUNKCAKE Delicieux
            </span>
          </div>
          <div className="swiper-slide">
            <img
              src="./images/showcase/220507.png"
              alt="Monster Sanctuary (사용자 패치)"
            />
            <span className="capt">
              <a href="https://blog.naver.com/ansewo/222702695752" target="_blank">
                Monster Sanctuary
              </a>{" "}
              (사용자 패치) by 솔라리어스
            </span>
          </div>
          <div className="swiper-slide">
            <img
              src="./images/showcase/220220.jpg"
              alt="NEEDY GIRL OVERDOSE (사용자 패치)"
            />
            <span className="capt">
              <a href="https://cosmicdeluge.tistory.com/5" target="_blank">
                NEEDY GIRL OVERDOSE
              </a>{" "}
              (사용자 패치) by 코스믹딜루즈 &amp; Quiple
            </span>
          </div>
          <div className="swiper-slide">
            <img src="./images/showcase/210302.jpg" alt="Teamfight Manager" />
            <span className="capt">
              <a href="https://store.steampowered.com/app/1372810" target="_blank">
                Teamfight Manager
              </a>{" "}
              © Team Samoyed
            </span>
          </div>
          <div className="swiper-slide">
            <img
              src="./images/showcase/210223.jpg"
              alt="BLUE REVOLVER (사용자 패치)"
            />
            <span className="capt">
              <a
                href="https://steamcommunity.com/sharedfiles/filedetails/?id=2405396574"
                target="_blank"
              >
                BLUE REVOLVER
              </a>{" "}
              (사용자 패치) by Sepheille
            </span>
          </div>
          <div className="swiper-slide">
            <img
              src="./images/showcase/210105.jpg"
              alt="Duke Dashington Remastered (사용자 패치)"
            />
            <span className="capt">
              <a
                href="https://blog.naver.com/bleach1491/222196942354"
                target="_blank"
              >
                Duke Dashington Remastered
              </a>{" "}
              (사용자 패치) by 바람 번역단
            </span>
          </div>
          <div className="swiper-slide">
            <img src="./images/showcase/201221.jpg" alt="Rev (사용자 패치)" />
            <span className="capt">
              <a
                href="https://blog.naver.com/bleach1491/222180900832"
                target="_blank"
              >
                Rev
              </a>{" "}
              (사용자 패치) by 바람 번역단
            </span>
          </div>
          <div className="swiper-slide">
            <img
              src="./images/showcase/200622.jpg"
              alt="Alwa's Legacy (사용자 패치)"
            />
            <span className="capt">
              <a
                href="https://blog.naver.com/bleach1491/222008221688"
                target="_blank"
              >
                Alwa's Legacy
              </a>{" "}
              (사용자 패치) by 바람 번역단
            </span>
          </div>
          <div className="swiper-slide">
            <img
              src="./images/showcase/200223.png"
              alt="Westerado: Double Barreled (사용자 패치)"
            />
            <span className="capt">
              <a
                href="https://blog.naver.com/bleach1491/221820971383"
                target="_blank"
              >
                Westerado: Double Barreled
              </a>{" "}
              (사용자 패치) by 바람 번역단
            </span>
          </div>
        </div>
      </div>
      <div className="doc">
        <p>Galmuri를 포함하여 파생된 폰트:</p>
        <ul>
          <li>
            <a href="https://github.com/TakWolf/fusion-pixel-font" target="_blank">
              Fusion Pixel Font
            </a>{" "}
            by TakWolf
            <br />
            SIL 오픈 폰트 라이선스 1.1 • 포함 폰트:{" "}
            <a href="https://github.com/TakWolf/ark-pixel-font" target="_blank">
              Ark Pixel Font
            </a>
            ,{" "}
            <a href="https://github.com/ACh-K/Cubic-11" target="_blank">
              Cubic 11
            </a>
            , Galmuri11
          </li>
          <li>
            <a href="https://diaowinner.itch.io/galmuri-extended" target="_blank">
              QuanPixel
            </a>{" "}
            by diaowinner
            <br />
            SIL 오픈 폰트 라이선스 1.1 • 포함 폰트: Galmuri7,{" "}
            <a href="https://github.com/Warren2060/Chill-Bitmap" target="_blank">
              Chill-Bitmap
            </a>{" "}
            (
            <a href="https://littlelimit.net/misaki.htm" target="_blank">
              MisakiGothic
            </a>
            ,{" "}
            <a
              href="https://github.com/scott0107000/BoutiqueBitmap7x7"
              target="_blank"
            >
              BoutiqueBitmap7x7
            </a>
            ,{" "}
            <a
              href="https://bbs.themex.net/showthread.php?t=16850810"
              target="_blank"
            >
              Guanzhi 8px
            </a>
            )
          </li>
        </ul>
        <h2>사용한 도구</h2>
        <ul>
          <li>
            바이너리 문자 집합 추출:{" "}
            <a href="https://www.romhacking.net/utilities/818/" target="_blank">
              CrystalTile2
            </a>{" "}
            by angel-team
          </li>
          <li>
            GNU Unifont 폰트 변환:{" "}
            <a
              href="http://unifoundry.com/unifont/unifont-utilities.html"
              target="_blank"
            >
              Unifont Utilities
            </a>{" "}
            by Unifoundry.com
          </li>
          <li>
            비트맵 폰트 편집 및 트루타입 윤곽선 폰트 생성:{" "}
            <a href="https://github.com/kreativekorp/bitsnpicas" target="_blank">
              Bits'N'Picas
            </a>{" "}
            by Kreative Software
          </li>
          <li>
            폰트 재작성 및 오픈타입 기능 추가:{" "}
            <a href="https://github.com/adobe-type-tools/afdko" target="_blank">
              Adobe Font Development Kit for OpenType
            </a>{" "}
            by Adobe
          </li>
          <li>
            WOFF2 압축:{" "}
            <a href="https://github.com/fonttools/fonttools" target="_blank">
              fonttools
            </a>{" "}
            by Just van Rossum
          </li>
        </ul>
        <h2>오류 보고</h2>
        <p>
          오류 및 이상한 부분을{" "}
          <a href="https://github.com/quiple/galmuri/issues" target="_blank">
            GitHub Issues
          </a>
          에서 알려주세요.
        </p>
        <h2>후원하기</h2>
        <div className="donate-wrap">
          <div className="donate">
            <a href="https://toss.me/quiple">
              <img className="donate-logo" src="./images/toss.svg" alt="토스" />
              <img
                className="donate-img"
                src="./images/toss.gif"
                alt="토스 송금하기"
              />
            </a>
          </div>
          <div className="donate">
            <a href="https://qr.kakaopay.com/Ej8JN15fH">
              <img
                className="donate-logo"
                src="./images/kakaopay.svg"
                alt="카카오페이"
              />
              <img
                className="donate-img"
                src="./images/kakaopay.gif"
                alt="카카오페이 송금하기"
              />
            </a>
          </div>
        </div>
        <p>
          <iframe
            src="https://github.com/sponsors/quiple/button"
            title="Sponsor quiple"
            style={{ border: 0 }}
            width={116}
            height={35}
          />
        </p>
        <h2>비트맵 폰트 복각 프로젝트 모음</h2>
        <ul>
          <li>
            <a href="https://galmuri.quiple.dev" target="_blank">
              Galmuri{" "}
              <img
                className="stars"
                alt="Galmuri"
                src="https://img.shields.io/github/stars/quiple/galmuri?color=%236171eb&label=%20"
              />
            </a>{" "}
            by Minseo Lee
            <br />
            SIL 오픈 폰트 라이선스 1.1 • 원본 디자인: 닌텐도/한국닌텐도
            <br />
            닌텐도 DS에 사용된 한글 비트맵 폰트를 복각하는 프로젝트.
          </li>
          <li>
            <a href="https://hbios.quiple.dev" target="_blank">
              HBIOS-SYS{" "}
              <img
                className="stars"
                alt="Galmuri"
                src="https://img.shields.io/github/stars/quiple/hbios-sys?color=%236171eb&label=%20"
              />
            </a>{" "}
            by Minseo Lee
            <br />
            CC BY-SA 4.0 • 원본 디자인: IBM, 큐닉스컴퓨터/한국마이크로소프트
            <br />
            한글 MS-DOS의 시스템 폰트를 복각하는 프로젝트.
          </li>
          <li>
            <a href="https://pjw48.net/iyagiggc/" target="_blank">
              이야기 굵은체
            </a>{" "}
            by PJW48
            <br />
            MIT 라이선스 • 원본 디자인: IBM, 하늘소/큰사람
            <br />
            이야기 5,3에 사용된 한글 비트맵 폰트인 굵은체를 복각하는 프로젝트.
          </li>
          <li>
            <a href="https://github.com/hurss/fonts" target="_blank">
              hurss/fonts{" "}
              <img
                className="stars"
                alt="hurss/fonts"
                src="https://img.shields.io/github/stars/hurss/fonts?color=%236171eb&label=%20"
              />
            </a>{" "}
            by Damheo Lee
            <br />
            MIT 라이선스 • 원본 디자인: IBM, 한글과컴퓨터 (도스명조, 도스고딕,
            도스샘물), 비스코/코에이 (삼국지3글꼴), 하늘소/큰사람 (이야기 굵은체),
            국립국어원 (미래로글꼴), 고야마 도시히사, 나머지 불명
            <br />
            DOS 환경에서 사용된 여러 한글 비트맵 폰트를 복각하는 프로젝트.
          </li>
          <li>
            <a href="https://cactus.tistory.com/193" target="_blank">
              둥근모꼴+Fixedsys
            </a>{" "}
            by Kil Hyung-jin
            <br />
            퍼블릭 도메인 • 원본 디자인: 마이크로소프트, 김중태
            <br />
            둥근모꼴을 복각하는 프로젝트.
          </li>
          <li>
            <a href="https://neodgm.dalgona.dev" target="_blank">
              Neo둥근모{" "}
              <img
                className="stars"
                alt="hurss/fonts"
                src="https://img.shields.io/github/stars/neodgm/neodgm?color=%236171eb&label=%20"
              />
            </a>{" "}
            by Eunbin Jeong
            <br />
            SIL 오픈 폰트 라이선스 1.1 • 원본 디자인: 김중태
            <br />
            둥근모꼴을 복각하는 프로젝트.
          </li>
          <li>
            <a href="https://github.com/codeman38/PressStart2P" target="_blank">
              Press Start 2P{" "}
              <img
                className="stars"
                alt="hurss/fonts"
                src="https://img.shields.io/github/stars/codeman38/PressStart2P?color=%236171eb&label=%20"
              />
            </a>{" "}
            by Cody Boisclair
            <br />
            SIL 오픈 폰트 라이선스 1.1 • 원본 디자인: 아타리
            <br />
            1980년대 남코의 아케이드 게임에 사용된 비트맵 폰트를 복각하는 프로젝트.
          </li>
          <li>
            <a href="https://int10h.org/oldschool-pc-fonts/" target="_blank">
              The Ultimate Oldschool PC Font Pack
            </a>{" "}
            by VileR
            <br />
            CC BY-SA 4.0 • 원본 디자인: IBM, 에이서, AT&amp;T, 컴팩, 휴렛팩커드,
            NEC, 산요, 샤프, 도시바, ATI, 엡손, 아타리, 후지쯔, 필립스, 지멘스,
            텍사스 인스트루먼트, 제니스 등<br />
            DOS 및 IBM PC 등에 사용된 여러 BIOS 폰트를 복각하는 프로젝트.
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20190207073141/http://www.fixedsysexcelsior.com/"
              target="_blank"
            >
              Fixedsys Excelsior
            </a>{" "}
            by Darien Valentine
            <br />
            퍼블릭 도메인 • 원본 디자인: 마이크로소프트
            <br />
            윈도우 1.0 및 2.0에 사용된 시스템 폰트 Fixedsys를 복각하는 프로젝트.
          </li>
          <li>
            <a href="https://github.com/kika/fixedsys" target="_blank">
              Fixedsys Excelsior font with programming ligatures{" "}
              <img
                className="stars"
                alt="hurss/fonts"
                src="https://img.shields.io/github/stars/kika/fixedsys?color=%236171eb&label=%20"
              />
            </a>{" "}
            by Kirill Pertsev
            <br />
            퍼블릭 도메인 • 원본 디자인: 마이크로소프트
            <br />
            Fixedsys Excelsior에 프로그래밍용 합자를 추가하는 프로젝트.
          </li>
        </ul>
        <small>
          © 2019-2022 Minseo Lee. Quiple은 Minseo Lee의 상표입니다. 닌텐도 DS는 Nintendo의 상표이며 이 프로젝트는 Nintendo와 어떠한 관련도 없습니다. 각 폰트 및 게임은 해당 소유자 및 사용 허가자의 상표 및 저작권 자산입니다.
        </small>
        <small>
          Also available on:{" "}
          <a href="https://www.sandollcloud.com" target="_blank">
            <img className="sandoll" src="./images/sandoll.png" alt="산돌구름" />
          </a>
          <a href="https://noonnu.cc" target="_blank">
            <img className="noonnu" src="./images/noonnu.png" alt="눈누" />
          </a>
          <br />
          산돌구름 및 눈누에 업로드되어 있는 파일은 최신 버전이 아닐 수 있습니다. 최신 버전을 사용하려면 <a href="https://github.com/quiple/galmuri/releases/latest" target="_blank">Github 릴리스 페이지에서 다운로드</a>하세요.
        </small>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Galmuri',
  meta: [
    {
      name: 'description',
      content: '작은 크기에서도 가독성 좋고 균형 있는 한글 비트맵 폰트.',
    },
    {
      property: 'og:description',
      content: '작은 크기에서도 가독성 좋고 균형 있는 한글 비트맵 폰트.',
    },
  ],
};
