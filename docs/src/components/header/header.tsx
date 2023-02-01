import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { OctocatIcon } from '../icons/octocat';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="container">
        <a class="github" href="https://github.com/quiple/galmuri" target="_blank" title="view on github">
          <OctocatIcon />
        </a>
      </div>
    </header>
  );
});
