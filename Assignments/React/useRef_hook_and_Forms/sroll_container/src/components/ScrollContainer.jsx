import { useRef, useState } from "react";
let ScrollContainer = () => {
  let pRef = useRef(null);
  let scrollToBottom = () => {
    let elem = pRef.current;
    console.log(elem);
    elem.Scroll({ top: 1000, behaviour: "smooth" });
  };
  return (
    <>
      <a href="#bottom">
        <button>Scroll to Bottom</button>
      </a>

      <div ref={pRef} id="container">
        <p id="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          mattis nunc. Etiam id metus magna. Pellentesque placerat id metus
          vitae porta. Aenean convallis risus nec tortor fringilla, vehicula
          hendrerit elit vestibulum. Suspendisse venenatis tortor eget elit
          pulvinar gravida. Nullam aliquam enim non lectus fringilla, ac maximus
          justo dapibus. Etiam a laoreet nunc. Praesent ac orci in erat dictum
          suscipit. Vestibulum vehicula rhoncus nulla, id fermentum sem euismod
          in. Pellentesque feugiat odio orci, in sodales ante pulvinar ac.
          Pellentesque volutpat tortor eu sem consectetur posuere ut vitae erat.
          Fusce molestie gravida ligula vel pulvinar. Aliquam sollicitudin orci
          ut odio bibendum, a feugiat metus feugiat. Duis non sapien ac enim
          venenatis dignissim at ac arcu. Pellentesque ac fringilla libero.
          Integer eu neque quis metus suscipit viverra ut at augue. Donec eget
          risus eu metus vestibulum viverra. Nulla dapibus mauris tortor, in
          convallis nunc mattis vitae. Sed vulputate nunc non elit rhoncus, et
          venenatis felis scelerisque. Nunc tempus scelerisque lectus. Quisque
          et turpis nec justo feugiat lobortis sed vel nisl. Nam vel euismod
          urna, in dapibus urna. Sed hendrerit felis vel tellus ullamcorper
          ultricies. Integer nec faucibus velit. Morbi suscipit leo sed nisi
          hendrerit, quis sollicitudin est facilisis. Phasellus interdum
          placerat massa et semper. Nunc semper, velit a hendrerit tristique,
          nunc odio aliquam augue, nec facilisis massa ante eu nisl. Ut maximus
          turpis eget massa auctor interdum. Sed finibus vestibulum posuere.
          Nullam pretium aliquet ligula, id fringilla dui euismod eu. Etiam
          faucibus nulla dapibus augue iaculis, quis facilisis sapien posuere.
          Curabitur non libero vel augue molestie aliquet. Integer dignissim
          gravida metus sed aliquet. Nullam sed rhoncus odio, ut convallis arcu.
          Duis elit nibh, maximus in eleifend eu, aliquam sit amet tortor. Fusce
          interdum neque luctus aliquet faucibus. Praesent facilisis arcu ut
          porttitor venenatis. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed pretium quam ante, id
          facilisis dui volutpat non. Fusce elit est, sodales suscipit elit sed,
          dignissim ultricies lacus. Ut non nisl nec odio volutpat aliquam. Duis
          egestas felis est, sit amet semper felis placerat sed. Sed sagittis ac
          nibh tincidunt pulvinar. Fusce ut tortor lectus. Ut sit amet diam quis
          magna ornare posuere ac vel velit. Vestibulum laoreet, mauris nec
          rhoncus semper, metus orci commodo orci, non scelerisque orci lectus
          eget ante. Praesent tempus erat at augue feugiat, ac viverra lorem
          dapibus. Pellentesque et pharetra nisi. Donec fermentum velit nec urna
          condimentum auctor. Sed id commodo tortor. Integer metus elit, rhoncus
          non placerat non, auctor eget elit. Sed elementum cursus ipsum,
          pharetra ornare tellus pellentesque ut. Praesent tincidunt diam sit
          amet dui mollis ultrices. Donec imperdiet enim enim, vitae mollis
          neque mollis rutrum. Vestibulum rhoncus purus odio, a maximus elit
          varius a. Phasellus vehicula, metus at sagittis ultrices, diam orci
          venenatis nunc, vitae convallis arcu ante vel sapien. Aliquam
          tristique semper convallis. Vestibulum tincidunt tellus enim, a congue
          arcu euismod sed. Donec id justo nunc. Proin mattis bibendum
          tincidunt. Sed molestie velit a sem consequat, sit amet convallis nibh
          feugiat. Vestibulum sed consectetur tortor. Sed eros tellus, ultrices
          eget enim eget, ornare vestibulum eros. Proin tristique, eros iaculis
          elementum facilisis, urna tellus ullamcorper erat, blandit semper
          justo tellus id tellus. Nulla facilisi. Morbi tristique viverra
          libero. Mauris quam nulla, molestie sit amet lacinia et, faucibus eu
          lectus. In tristique finibus lacus vel ultrices. Donec purus urna,
          cursus ut iaculis id, dictum a mauris. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Mauris
          egestas elementum dui, eu ultrices eros tincidunt at. Phasellus
          scelerisque sodales eros, id varius turpis tristique non. Fusce ut
          lacus turpis. Aenean facilisis dolor sit amet suscipit maximus.
          Aliquam vulputate vel nulla et aliquam. Integer mattis felis in
          vestibulum aliquet. Nam id felis vel nisl tempus pretium et at ex.
          Vivamus ullamcorper dictum massa. Nulla quis eros at orci volutpat
          semper. Mauris eu est vestibulum, condimentum tortor vitae,
          scelerisque libero. Donec aliquet arcu sit amet condimentum egestas.
          Mauris sem neque, vehicula et congue nec, pretium eget est. Curabitur
          nec ex ac libero semper sagittis. Sed efficitur aliquam massa, a
          pretium arcu hendrerit a. Suspendisse auctor sodales elit vitae
          molestie. Nulla pretium diam nec mauris mattis tempus. Nullam blandit
          orci cursus lectus fringilla rhoncus. Sed est urna, lacinia ac
          fringilla id, vestibulum id velit. Aliquam tincidunt velit ligula, et
          sodales orci lacinia sit amet. Integer porta ante at augue pretium,
          vitae tristique mauris pulvinar. Integer molestie eleifend dolor, id
          condimentum quam sodales eu. Vivamus rhoncus ipsum egestas, auctor
          odio id, efficitur dui. Maecenas placerat semper tortor. Morbi vel
          lobortis est. Sed et lectus maximus ex placerat porttitor. Nunc
          posuere ipsum libero, at accumsan mi varius sit amet. Integer
          venenatis purus vitae rutrum condimentum. Proin eleifend enim id
          mauris ultrices, in porta sapien faucibus. Vivamus tristique
          condimentum velit, nec hendrerit turpis ornare ut. Praesent in
          pulvinar neque, eu consectetur nunc. Cras mollis vitae orci a varius.
          Donec dapibus suscipit ante at dapibus. Nullam venenatis ipsum eu
          auctor vestibulum. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Vivamus ac pellentesque magna.
          Maecenas tempus purus sodales rhoncus ultrices. Pellentesque egestas
          massa ac dignissim venenatis. Nullam ut auctor augue, vel rutrum
          neque. Nunc gravida sed erat sed faucibus. Pellentesque ante lorem,
          iaculis bibendum diam ac, feugiat viverra justo. Nulla nisl lacus,
          volutpat vel dapibus et, eleifend ut lectus. In euismod placerat
          nulla, ac tempor eros consectetur sed.
          <span id="bottom"></span>
        </p>
      </div>
    </>
  );
};

export default ScrollContainer;
