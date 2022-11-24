import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <p>&copy; 2019-2022 Minseo Lee. Quiple은 Minseo Lee의 상표입니다. 닌텐도 DS는 Nintendo의 상표이며 이 프로젝트는 Nintendo와 어떠한 관련도 없습니다. 각 폰트 및 게임은 해당 소유자 및 사용 허가자의 상표 및 저작권 자산입니다.</p>
        <p>Also available on: <a href="https://www.sandollcloud.com" target="_blank"><img class="sandoll" src="./files/sandoll.png" alt="산돌구름" /></a><a href="https://noonnu.cc" target="_blank"><img class="noonnu" src="./files/noonnu.png" alt="눈누" /></a></p>
        <p>산돌구름 및 눈누에 업로드되어 있는 파일은 최신 버전이 아닐 수 있습니다. 최신 버전을 사용하려면 <a href="https://github.com/quiple/galmuri/releases/latest" target="_blank">Github 릴리스 페이지에서 다운로드</a>하세요.</p>
      </footer>
    </>
  );
});
