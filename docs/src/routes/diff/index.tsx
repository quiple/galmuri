import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './diff.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div className="doc">
      <h2>주요 변경점</h2>
      <p>
        Galmuri14·11·9의 한글은 Nintendo의 원본이 존재하지만 Galmuri는 가독성과 일관성을 위해 여러 글자의 자형을 수정하거나 기존 2,355자였던 한글 음절을 최대 11,172자까지 늘리는 등 아래의 내용 외에도 여러 부분을 개선하였습니다.
      </p>
      <small>Galmuri11 Bold·11 Condensed·7의 한글은 다른 것을 기반으로 하지 않고 아예 새로 만들어졌습니다.</small>
      <h3>Galmuri14</h3>
      <section className="row">
        <div className="diff C544">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
        <div className="diff C800">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
      </section>
      <h3>Galmuri11</h3>
      <section className="row">
        <div className="diff AC8C">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
        <div className="diff ACC4">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="row">
        <div className="diff CF00">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
        <div className="diff CF38">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="row">
        <div className="diff D131">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
        <div className="diff D17C">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
      </section>
      <h3>Galmuri9</h3>
      <section className="row">
        <div className="diff BFD4">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td className="fore" /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
        <div className="diff C724">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /></tr>
              <tr><td /><td /><td /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td className="fore" /><td /><td /><td className="fore" /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td className="fore" /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
      </section>
      {/*<section className="row">
        <div className="diff CF00">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
        <div className="diff CF38">
          <table className="grid old">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
          <table className="grid new">
            <tbody>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
              <tr><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /></tr>
            </tbody>
          </table>
        </div>
      </section>*/}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Galmuri 주요 변경점',
};
