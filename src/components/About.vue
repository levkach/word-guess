<template>
  <div id="about">
    <h1>Word Guess</h1>
    <h2>Clasical Word Quiz</h2>

    <h4>Cil projektu</h4>
    <p>
      Cilem projektu bylo vytvorit jednoduchou hru za ucelem naucit si zaklady jazyku Javascript,
      prozkoumat zajimave moznosti jazyku CSS3 a vyzkouset si framework Vue.js
    </p>

    <p>
      Podstata hry samotne je jednoducha - je to
      <i>"word quiz"</i>.
      Uzivatel zvoli libovolnou mnozinu urovne slozitosti (kterych je celkove tri), libovolnou mnozinu okruhu slov a zacne hrat.
      <b>Otazka</b>
      je definice slova, moznosti odpovedi jsou ctyri, spravna moznost je vzdy jedna. Cas je ohranicen, celkem 10 sekund na otazku.
      Po odpovedi ci uplynuti casu se zobrazi vysledek a zindikuje se spravna odpoved. Takle hra pokracuje az uzivatel ji ukonci, nebo se vyprazdni slovni zasoba anebo uzivatel pujde zpatky.
      Po skonceni hry si uzivatel bud ulozi vysledky do tabulky anebo necha a jde zpatky.
      Hra je doplnena setridenou tabulkou vysledku a slovnikem s moznosti filtrovani slov podle slozitosti a okruhu.
    </p>

    <h4>Realizace</h4>

    <i>Vyuzity Stack:</i>
    <ul>
      <li>HTML 5, CSS 3, Javascript</li>
      <li>Vue.js, Vue router, Vue CLI 3</li>
      <li>Dexie</li>
      <li>Webpack, Babel, NPM</li>
    </ul>

    <p>
      Slova se cepraji z externiho serveru na Google Cloudu (psano v nodejs), ktery je ma ulozena v zadanem formatu.
      Nasledne se slova ukladaji i do interni IndexedDB databazi pro optimalizaci vyuziti site.
      Instance teto databazi je pak pouzita tam kde je treba (ve slovniku a u voleb parametru hry).
      <br>Slova maji atributy
      <i>"self"</i> (slovo samotne),
      <i>definition</i>,
      <i>tag</i> a
      <i>difficulty</i>.
    </p>

    <p>
      Cela aplikace je rozdelena do vetsich komponent, ktere se skladaji z mensich casti.
      Nasledne kazda komponenta ci cast je zodpovedna za jedinou vec.
      Tak, napriklad, komponenta
      <b>Dictionary</b> je slozena z casti
      <i>DiffPicker</i>,
      <i>TagPicker</i>, a
      <i>WordList</i>.
      Casti
      <i>DiffPicker</i> a
      <i>TagPicker</i> jsou pak moc podobne a skladaji se z komponent
      <i>Diff</i> a
      <i>Tag</i> respektive.
      Ty uz jsou pak nejjednodussi bloky. Jsou to v podstate
      <i>html</i> znacky
      <i>div</i>
      , reagujici na stisknuti a predavajici tyto udalosti nahoru rodicum, kde jsou pak informace o techto udalostech vyuzita pro provedeni zmen. Tak,
      <i>DiffPicker</i> a
      <i>TagPicker</i> dostavaji udalosti od koresp. prvku a predavaji novou udalost o zmene komponente
      <b>Dictionary</b>, ktera uz vybrana slova na zaklade techto filtru vykresli.
      Tyto casti a komponenty maji vlastni "scoped" stylovani. Nejcasteji bylo pouzito stylovani pomoci Flexboxu. Podobne to funguje v cele aplikaci.
      Jsou tedy vyuzite principy
      <i>Props down - events up</i>,
      <i>Separation of concerns</i> a reaktivita.
    </p>

    <p>
      Aplikace nasledne byla nahrana na GitHub a do umistena na domene
      <br>
      <a
        class="nostyle"
        href="https://levkach.github.io/word-guess/#/"
      >https://levkach.github.io/word-guess/#/</a>
    </p>

    <h4>Pozadavky na HTML</h4>
    <ul>
      <li>DOCTYPE je validni</li>
      <li>Testovano v Chrome, Firefox a Edge</li>
      <li>Byla pouzita SVG grafika pro tvorbu logo ikonky</li>
      <li>audio prvky behem hry</li>
      <li>semanticky znacky pro navigaci</li>
      <li>osetreny formularovy prvek pro zadani vysledku</li>
      <li>aplikace je funkcni i offline</li>
    </ul>

    <h4>Pozadavky na CSS3</h4>
    <ul>
      <li>
        V par mistech (
        <i>Dictionary</i>,
        <i>Result</i>) je vyuzito pridani pseudopotomku v zavislosti na poctu realnich potomku, jsou vyuzita i dalsi pokrocile selektory(
        <i>:hover</i>)
      </li>
      <li>Aplikace je vyuzitelna i na moblnich zarizenich (Media querries, vendor prefixy)</li>
      <li>Jednoduche transitions a animations (prechod mezi stranky, animace buttonum, animace loga, stylovani pozadi)</li>
    </ul>

    <h4>Pozadavky na Javascript</h4>
    <ul>
      <li>
        OOP - zcasti je. Komponenty jsou v podstate objekty, komunikujici pomoci zprav.
        Take byla polyfillovana trida
        <i>Array</i> pro jednoduche generovani nahodnych mnozin
      </li>
      <li>Byl vyuzit framework Vue.js a jeho zakl. principy</li>
      <li>Misto LocalStorage bylo vyuzito IndexedDB(Dexie)</li>
      <li>Posuny tlacitek fungujou korektne</li>
      <li>Jsou zvuky, prehrane z JS</li>
      <li>Aplikace je funkcni i offline</li>
    </ul>

    <router-link to="/home">Back</router-link>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#about p {
  width: 80%;
}

#about a {
  margin-top: 10px;
}

a.nostyle {
  all: unset;
  cursor: pointer;
  color: blueviolet;
}
</style>
