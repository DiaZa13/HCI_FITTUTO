import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import history from '../utils/history';

export default function NavBar() {
  // const { url } = useRouteMatch();
  // Scroll position
  // @author: rbk
  // Extraido y adaptado de: https://codesandbox.io/s/useeffect-scroll-event-oolh6?from-embed=&file=/src/index.js
  const [fixed, setFixed] = useState(false);
  function logit() {
    const scrollY = window.pageYOffset;
    if (scrollY >= 56) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });

  return (
    <div>
      {/* NavBar menu */}
      <div className={`nav bg-white ${fixed ? 'fixed' : ''}`}>
        <div style={{ height: '70px'}} className="w-100">
          <nav className="navbar navbar-expand-lg navbar-light text-light">
            <button
              className="navbar-toggler mr-3"
              type="button"
              data-toggle="collapse"
              data-target="#products"
              aria-controls="products"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="material-icons">
                menu
              </span>
            </button>
            <div className="d-flex flex-grow-1 justify-content-between align-items-center">
              {/* LOGO */}
              <div aria-label="Google store logo" className="logo_animation ms-5">
                <div className="logo-bg-large">
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="56.00" viewBox="0 0 359.477 100.668">
                    <g id="surface1" transform="translate(-6.806 -6.537)">
                      <path id="Path_109" data-name="Path 109" d="M93.449,51.809c-2.062-12.816,15.8-19.738,14.156-29.27-1.906-11-28.648-18.8-51.265-15.047C49.555,8.617,24,12.863,12.4,35.934,1.2,58.2,7.309,89.434,26.32,101.73c30.516,19.731,79.3-19.015,77.039-34.867-.847-5.937-8.605-6.949-9.91-15.055" fill="#caddff"/>
                      <path id="Path_110" data-name="Path 110" d="M99.547,89.238a6.067,6.067,0,0,1,0-5.785l-.734-.875-20.027.656.691,6.348,19.387.223.684-.566" fill="#fff"/>
                      <path id="Path_111" data-name="Path 111" d="M79.637,89.4l19.16.219.523-.43a6.26,6.26,0,0,1,.008-5.715l-.6-.715-19.742.648Zm19.227.586h0l-19.387-.223a.192.192,0,0,1-.18-.164L78.6,83.254a.187.187,0,0,1,.047-.141.194.194,0,0,1,.129-.062l20.031-.656a.171.171,0,0,1,.145.066l.73.875a.178.178,0,0,1,.023.2,5.871,5.871,0,0,0,0,5.621.181.181,0,0,1-.051.219l-.68.566a.2.2,0,0,1-.117.043"/>
                      <path id="Path_112" data-name="Path 112" d="M62.742,81.879H99.918a.785.785,0,0,1,0,1.57H82.828a2.261,2.261,0,0,0-2.266,2.258V86.98a2.261,2.261,0,0,0,2.266,2.258h17.09a.785.785,0,0,1,0,1.57H62.742a4.171,4.171,0,0,1-4.176-4.168v-.594a4.174,4.174,0,0,1,4.176-4.168" fill="#fff"/>
                      <path id="Path_113" data-name="Path 113" d="M62.742,82.059a3.994,3.994,0,0,0-3.992,3.988v.594a3.994,3.994,0,0,0,3.992,3.988H99.918a.6.6,0,1,0,0-1.207H82.828a2.449,2.449,0,0,1-2.449-2.441V85.707a2.449,2.449,0,0,1,2.449-2.441h17.09a.6.6,0,1,0,0-1.207Zm37.176,8.934H62.742a4.362,4.362,0,0,1-4.359-4.352v-.594A4.362,4.362,0,0,1,62.742,81.7H99.918a.967.967,0,1,1,0,1.934H82.828a2.086,2.086,0,0,0-2.086,2.078V86.98a2.086,2.086,0,0,0,2.086,2.078h17.09a.967.967,0,1,1,0,1.934"/>
                      <path id="Path_114" data-name="Path 114" d="M90.219,85.313H88.754a.182.182,0,1,1,0-.363h1.465a.182.182,0,0,1,0,.363"/>
                      <path id="Path_115" data-name="Path 115" d="M98.883,85.313h-7.75a.182.182,0,0,1,0-.363h7.75a.182.182,0,1,1,0,.363"/>
                      <path id="Path_116" data-name="Path 116" d="M98.813,86.258H89.645a.182.182,0,1,1,0-.363h9.168a.182.182,0,1,1,0,.363"/>
                      <path id="Path_117" data-name="Path 117" d="M89,87.953H87.34a.182.182,0,1,1,0-.363H89a.182.182,0,1,1,0,.363"/>
                      <path id="Path_118" data-name="Path 118" d="M98.883,87.953H89.715a.182.182,0,0,1,0-.363h9.168a.182.182,0,1,1,0,.363"/>
                      <path id="Path_119" data-name="Path 119" d="M98.969,99.934H65.391V91.727H98.969a11.537,11.537,0,0,0,0,8.207" fill="#fff"/>
                      <path id="Path_120" data-name="Path 120" d="M65.57,99.754H98.707a11.749,11.749,0,0,1,0-7.844H65.57Zm33.4.363H65.391a.183.183,0,0,1-.184-.183V91.727a.183.183,0,0,1,.184-.18H98.969a.18.18,0,0,1,.172.242,11.405,11.405,0,0,0,0,8.082.173.173,0,0,1-.02.168.188.188,0,0,1-.148.078"/>
                      <path id="Path_121" data-name="Path 121" d="M69.434,92.133H99.2a.647.647,0,1,0,0-1.293H60.57a2.844,2.844,0,0,0-2.848,2.84v4.469a2.846,2.846,0,0,0,2.848,2.84H99.2a.646.646,0,1,0,0-1.293H69.434a2.011,2.011,0,0,1-2.016-2.008V94.141a2.011,2.011,0,0,1,2.016-2.008" fill="#ffb300"/>
                      <path id="Path_122" data-name="Path 122" d="M60.57,91.02a2.667,2.667,0,0,0-2.664,2.66v4.469a2.667,2.667,0,0,0,2.664,2.661H99.2a.465.465,0,0,0,0-.93H69.434a2.2,2.2,0,0,1-2.2-2.191V94.141a2.2,2.2,0,0,1,2.2-2.191H99.2a.465.465,0,1,0,0-.93ZM99.2,101.172H60.57a3.029,3.029,0,0,1-3.027-3.024V93.68a3.029,3.029,0,0,1,3.027-3.023H99.2a.828.828,0,0,1,0,1.656H69.434A1.831,1.831,0,0,0,67.6,94.141v3.547a1.831,1.831,0,0,0,1.832,1.828H99.2a.828.828,0,0,1,0,1.656"/>
                      <path id="Path_123" data-name="Path 123" d="M98.375,93.859H93.414a.184.184,0,0,1,0-.367h4.961a.184.184,0,0,1,0,.367"/>
                      <path id="Path_124" data-name="Path 124" d="M92.566,93.859H83.551a.184.184,0,0,1,0-.367h9.016a.184.184,0,0,1,0,.367"/>
                      <path id="Path_125" data-name="Path 125" d="M98.27,94.953H85.879a.182.182,0,1,1,0-.363H98.27a.182.182,0,0,1,0,.363"/>
                      <path id="Path_126" data-name="Path 126" d="M84.832,94.953H82.309a.182.182,0,1,1,0-.363h2.523a.182.182,0,0,1,0,.363"/>
                      <path id="Path_127" data-name="Path 127" d="M98.27,97.238H85.129a.182.182,0,0,1,0-.363H98.27a.182.182,0,0,1,0,.363"/>
                      <path id="Path_128" data-name="Path 128" d="M84.207,97.238h-.656a.182.182,0,0,1,0-.363h.656a.182.182,0,1,1,0,.363"/>
                      <path id="Path_129" data-name="Path 129" d="M89.91,68.445c1.074.289,6.848,1.828,11.645-1.363,6.3-4.187,5.828-13.141,5.734-15-.078-1.453-.461-8.824-5.793-13.226-4.621-3.812-9.191-2.285-10.984-5.945-1.437-2.926,1.117-4.652-.078-8.957-1-3.586-3.68-5.672-6.629-7.969-3.4-2.649-7.66-5.961-11.965-4.6-1.949.617-4.176,2.277-4.609,4.477-.754,3.813,4.156,7.844,7.352,9.57,1.273.691,1.285.481,1.746.871,3.73,3.188-3.242,11.93-2.367,22,.77,8.918,7.613,17.914,15.949,20.137"/>
                      <path id="Path_130" data-name="Path 130" d="M62,37.582c5.371-3.047,12.285-.277,15.746,1.113,2.512,1,15.824,6.34,16.4,17.941.348,6.938-4.012,13.031-8.926,16.266A20.812,20.812,0,0,1,61.5,72.047c-10.984-8.742-8.6-29.3.5-34.465" fill="#ffa000"/>
                      <path id="Path_131" data-name="Path 131" d="M87.32,45.6a9.083,9.083,0,0,0-1.391-2.5,7.988,7.988,0,0,1-1.48-3.234L82.965,32.91c.223-.215.344-.348.344-.348s2.938-.773,2.7-2.363-2.441-.887-2.441-.887-1-.289-.258-1.812a12.33,12.33,0,0,0,.91-3.875s-.715-.75-3.5-.621c-2.668.125-7.328,1.281-7.774-1.293A17.319,17.319,0,0,0,71.133,28.2a10.385,10.385,0,0,0,.266,3.633c.242.832,1.035,3.563,3.34,4.324a4.207,4.207,0,0,0,2.066.121l.145,1.125a.9.9,0,0,1-1.133.969l-2.8-.789s.32,4.82,3.785,7.191,11.152,2.617,10.52.824" fill="#fff"/>
                      <path id="Path_132" data-name="Path 132" d="M73.223,37.832c.129,1.023.789,4.809,3.68,6.789,2.922,2,8.82,2.461,10.082,1.492a.365.365,0,0,0,.164-.457,8.91,8.91,0,0,0-1.363-2.449,8.284,8.284,0,0,1-1.516-3.3l-1.48-6.953a.188.188,0,0,1,.051-.168c.211-.207.332-.34.332-.34a.166.166,0,0,1,.09-.055c.027-.008,2.777-.75,2.563-2.16a.93.93,0,0,0-.422-.7,2.643,2.643,0,0,0-1.781-.043.194.194,0,0,1-.105,0,.965.965,0,0,1-.566-.524,1.863,1.863,0,0,1,.2-1.547,11.871,11.871,0,0,0,.887-3.711c-.211-.152-1.074-.625-3.3-.523-.527.027-1.137.09-1.777.16-2.383.258-5.3.574-6.043-1.129a16.992,16.992,0,0,0-1.59,6,10.241,10.241,0,0,0,.258,3.57c.25.855,1.008,3.469,3.223,4.2a3.986,3.986,0,0,0,1.977.117.178.178,0,0,1,.141.031.2.2,0,0,1,.074.125l.141,1.125a1.075,1.075,0,0,1-1.359,1.164Zm11.168,9.121a14.994,14.994,0,0,1-7.7-2.031c-3.5-2.391-3.848-7.125-3.863-7.328a.184.184,0,0,1,.234-.187l2.8.789a.712.712,0,0,0,.66-.145.7.7,0,0,0,.238-.629l-.117-.937a4.256,4.256,0,0,1-1.969-.156c-1.59-.527-2.75-2.023-3.457-4.445a10.711,10.711,0,0,1-.27-3.7,17.534,17.534,0,0,1,1.832-6.555.178.178,0,0,1,.188-.1.187.187,0,0,1,.156.148c.324,1.891,3.223,1.578,5.781,1.3.648-.07,1.262-.137,1.8-.164,2.84-.133,3.613.645,3.645.68a.176.176,0,0,1,.051.137,12.3,12.3,0,0,1-.93,3.941,1.528,1.528,0,0,0-.187,1.238.6.6,0,0,0,.289.3,2.819,2.819,0,0,1,2.02.1,1.292,1.292,0,0,1,.594.953c.246,1.629-2.363,2.434-2.781,2.551-.043.047-.125.133-.238.246l1.461,6.855a7.824,7.824,0,0,0,1.445,3.16,9.122,9.122,0,0,1,1.418,2.551.729.729,0,0,1-.285.867,5.256,5.256,0,0,1-2.816.551"/>
                      <path id="Path_133" data-name="Path 133" d="M76.8,36.457a.179.179,0,0,1-.18-.164.183.183,0,0,1,.164-.2c3.691-.332,4.656-2.594,4.664-2.617a.183.183,0,0,1,.34.137c-.043.1-1.062,2.492-4.973,2.844H76.8"/>
                      <path id="Path_134" data-name="Path 134" d="M48.363,77.711H22.934a1.734,1.734,0,0,1-1.676-1.5L17.031,41.3a1.608,1.608,0,0,1,1.68-1.883l25.066.391,4.586,37.9"/>
                      <path id="Path_135" data-name="Path 135" d="M18.707,39.6a1.455,1.455,0,0,0-1.145.457,1.58,1.58,0,0,0-.352,1.223L21.438,76.2a1.552,1.552,0,0,0,1.5,1.332H48.16L43.613,39.988ZM48.363,77.891H22.934a1.926,1.926,0,0,1-1.859-1.652L16.848,41.324a1.943,1.943,0,0,1,.441-1.508,1.833,1.833,0,0,1,1.422-.578l25.066.387a.185.185,0,0,1,.18.16l4.586,37.9a.17.17,0,0,1-.043.141.181.181,0,0,1-.137.063"/>
                      <path id="Path_136" data-name="Path 136" d="M72.34,77.711H48.387L43.8,39.809H67.75A1.738,1.738,0,0,1,69.43,41.3l4.227,34.914a1.3,1.3,0,0,1-1.317,1.5"/>
                      <path id="Path_137" data-name="Path 137" d="M48.547,77.527H72.34a1.114,1.114,0,0,0,1.133-1.289L69.246,41.324a1.546,1.546,0,0,0-1.5-1.332H44Zm23.793.363H48.387a.182.182,0,0,1-.18-.16l-4.59-37.9a.191.191,0,0,1,.047-.145.18.18,0,0,1,.137-.062H67.75a1.926,1.926,0,0,1,1.859,1.656L73.836,76.2a1.5,1.5,0,0,1-.359,1.2,1.489,1.489,0,0,1-1.137.5"/>
                      <path id="Path_138" data-name="Path 138" d="M48.727,77.32H23.3a1.73,1.73,0,0,1-1.676-1.492L17.395,40.914a1.3,1.3,0,0,1,1.316-1.5h25.43l4.586,37.9" fill="#ffb300"/>
                      <path id="Path_139" data-name="Path 139" d="M18.711,39.6a1.143,1.143,0,0,0-.867.371,1.157,1.157,0,0,0-.27.918L21.8,75.8a1.552,1.552,0,0,0,1.5,1.332H48.523L43.977,39.6ZM48.727,77.5H23.3a1.929,1.929,0,0,1-1.859-1.652L17.211,40.934a1.477,1.477,0,0,1,1.5-1.7h25.43a.181.181,0,0,1,.18.16l4.59,37.9a.191.191,0,0,1-.047.145.177.177,0,0,1-.137.059"/>
                      <path id="Path_140" data-name="Path 140" d="M72.7,77.32H48.75l-4.586-37.9H68.113a1.741,1.741,0,0,1,1.68,1.5L74.02,75.828A1.3,1.3,0,0,1,72.7,77.32" fill="#ffb300"/>
                      <path id="Path_141" data-name="Path 141" d="M48.914,77.137H72.7a1.114,1.114,0,0,0,1.133-1.289L69.609,40.934a1.546,1.546,0,0,0-1.5-1.332H44.367ZM72.7,77.5H48.75a.181.181,0,0,1-.18-.16l-4.59-37.9a.2.2,0,0,1,.047-.144.177.177,0,0,1,.137-.059H68.113a1.926,1.926,0,0,1,1.859,1.652L74.2,75.8a1.517,1.517,0,0,1-.359,1.2A1.5,1.5,0,0,1,72.7,77.5"/>
                      <path id="Path_142" data-name="Path 142" d="M23.18,76.246H48.621l-3.637-4.8-19.106-.687-2.785,1.234.086,4.254" fill="#ffb300"/>
                      <path id="Path_143" data-name="Path 143" d="M23.359,76.063H48.254l-3.363-4.437-18.973-.684-2.637,1.168Zm25.262.363H23.18A.182.182,0,0,1,23,76.25L22.914,72a.171.171,0,0,1,.105-.168L25.8,70.59a.3.3,0,0,1,.082-.016l19.105.691a.17.17,0,0,1,.137.07l3.637,4.8a.174.174,0,0,1,.02.188.182.182,0,0,1-.164.1"/>
                      <path id="Path_144" data-name="Path 144" d="M19.1,35.406l-.492,3.055L23.18,76.246l.508-2.941-4.59-37.9" fill="#ffb300"/>
                      <path id="Path_145" data-name="Path 145" d="M18.789,38.465l4.422,36.523L23.5,73.3l-4.426-36.59ZM23.18,76.426h0a.182.182,0,0,1-.18-.16l-4.57-37.781a.112.112,0,0,1,0-.051l.492-3.059a.188.188,0,0,1,.184-.152.181.181,0,0,1,.176.16l4.59,37.9a.22.22,0,0,1,0,.051l-.508,2.941a.184.184,0,0,1-.18.148"/>
                      <path id="Path_146" data-name="Path 146" d="M48.609,76.246A9.611,9.611,0,0,0,41.836,73.3H23.688l-4.59-37.9H37.25a9.637,9.637,0,0,1,6.773,2.938l4.586,37.9" fill="#fff"/>
                      <path id="Path_147" data-name="Path 147" d="M23.848,73.125H41.836a9.738,9.738,0,0,1,6.531,2.633L43.848,38.43a9.414,9.414,0,0,0-6.6-2.844H19.3Zm24.762,3.3a.183.183,0,0,1-.129-.055,9.43,9.43,0,0,0-6.645-2.883H23.688a.185.185,0,0,1-.184-.16l-4.586-37.9a.17.17,0,0,1,.043-.141.187.187,0,0,1,.137-.062H37.25a9.785,9.785,0,0,1,6.9,3,.168.168,0,0,1,.051.105l4.586,37.9a.181.181,0,0,1-.1.188.175.175,0,0,1-.078.016"/>
                      <path id="Path_148" data-name="Path 148" d="M45.914,72a11.45,11.45,0,0,0-4.34-.875H25.605L21.543,37.582H37.512a7.038,7.038,0,0,1,4.434,1.641L45.914,72" fill="#caddff"/>
                      <path id="Path_149" data-name="Path 149" d="M61.23,43.992,48.621,76.246h23.7l.508-2.941L61.23,43.992" fill="#ffb300"/>
                      <path id="Path_150" data-name="Path 150" d="M48.887,76.063H72.172l.473-2.738L61.23,44.488Zm23.438.363h-23.7a.18.18,0,0,1-.152-.078.2.2,0,0,1-.02-.168L61.059,43.926a.182.182,0,0,1,.34,0L73,73.238a.208.208,0,0,1,.008.1L72.5,76.277a.181.181,0,0,1-.18.148"/>
                      <path id="Path_151" data-name="Path 151" d="M48.621,76.246A7.426,7.426,0,0,1,54.68,73.3H72.832l-4.586-37.9H50.094a7.441,7.441,0,0,0-6.062,2.938l4.59,37.9" fill="#fff"/>
                      <path id="Path_152" data-name="Path 152" d="M44.223,38.395,48.75,75.789a7.637,7.637,0,0,1,5.93-2.664H72.625L68.082,35.586H50.094A7.247,7.247,0,0,0,44.223,38.395Zm4.4,38.031a.191.191,0,0,1-.047,0,.185.185,0,0,1-.133-.156l-4.59-37.9a.2.2,0,0,1,.035-.133,7.6,7.6,0,0,1,6.207-3.012H68.246a.185.185,0,0,1,.18.16l4.586,37.9a.17.17,0,0,1-.043.141.188.188,0,0,1-.137.063H54.68a7.246,7.246,0,0,0-5.914,2.863.178.178,0,0,1-.144.074"/>
                      <path id="Path_153" data-name="Path 153" d="M46.32,39.223a5.569,5.569,0,0,1,4.035-1.641H66.324l4.063,33.547H54.418A9.927,9.927,0,0,0,50.289,72L46.32,39.223" fill="#caddff"/>
                      <path id="Path_154" data-name="Path 154" d="M38,35.148a15.482,15.482,0,0,1-4.277,2.84c-2.133.809-4.91-.645-4.91-.645s-.336-1.1.723-1.066a20.371,20.371,0,0,0,3.152-.359l-2.965-.371-3.574,1.605a2.577,2.577,0,0,1-2.465-.2l.492-.777-.094.066a1.713,1.713,0,0,1-2.023-.066l3.766-3.492a4.576,4.576,0,0,1,3.18-1.223l3.293.043a3.98,3.98,0,0,1,2.516.938L38,35.148" fill="#fff"/>
                      <path id="Path_155" data-name="Path 155" d="M28.973,37.219c.445.215,2.848,1.3,4.691.6a14.908,14.908,0,0,0,4.066-2.668L34.7,32.586a3.815,3.815,0,0,0-2.4-.9L29,31.645a4.4,4.4,0,0,0-3.055,1.176l-3.594,3.34a1.519,1.519,0,0,0,1.629-.066l.094-.062a.182.182,0,0,1,.258.246l-.394.621a2.379,2.379,0,0,0,2.137.086l3.574-1.606a.2.2,0,0,1,.1-.016l2.961.371a.181.181,0,0,1,.16.176.178.178,0,0,1-.148.184,19.787,19.787,0,0,1-3.191.363.57.57,0,0,0-.488.164A.811.811,0,0,0,28.973,37.219Zm3.3,1.2A8.653,8.653,0,0,1,28.73,37.5a.2.2,0,0,1-.09-.105,1.243,1.243,0,0,1,.113-1,.9.9,0,0,1,.789-.309,12.025,12.025,0,0,0,1.871-.156l-1.66-.207L26.23,37.316a2.739,2.739,0,0,1-2.645-.207.183.183,0,0,1-.055-.25l.137-.211a1.891,1.891,0,0,1-1.719-.324.189.189,0,0,1-.07-.137.191.191,0,0,1,.059-.141L25.7,32.555a4.762,4.762,0,0,1,3.309-1.273l3.293.043a4.162,4.162,0,0,1,2.629.984l3.191,2.7a.179.179,0,0,1,.063.133.174.174,0,0,1-.055.137,15.56,15.56,0,0,1-4.34,2.883,4.316,4.316,0,0,1-1.52.258"/>
                      <path id="Path_156" data-name="Path 156" d="M24.18,36.363a.182.182,0,0,1-.121-.316l3.2-2.914a1.708,1.708,0,0,1,1.1-.441l2.176-.051a.182.182,0,1,1,.008.363l-2.176.055a1.334,1.334,0,0,0-.863.344l-3.2,2.914a.191.191,0,0,1-.125.047"/>
                      <path id="Path_157" data-name="Path 157" d="M63.129,62.691l-1.777-2.617a4.006,4.006,0,0,0-2.09-1.566L49.941,55.5s-.644,1.445,1.641,2.363l3.02,1.074s-1,2.566.215,4.3c1.981,2.828,6.426,2.094,6.426,2.094l1.887-2.637" fill="#fff"/>
                      <path id="Path_158" data-name="Path 158" d="M50.063,55.727a1.27,1.27,0,0,0,.074.73,2.535,2.535,0,0,0,1.512,1.234l3.012,1.074a.179.179,0,0,1,.105.094.176.176,0,0,1,0,.141c-.008.027-.949,2.5.2,4.129,1.758,2.508,5.594,2.109,6.176,2.031l1.766-2.469L61.2,60.176a3.849,3.849,0,0,0-1.992-1.5ZM59.938,65.6c-1.508,0-3.922-.332-5.273-2.266-1.082-1.543-.5-3.664-.3-4.289L51.52,58.031A2.868,2.868,0,0,1,49.8,56.586a1.553,1.553,0,0,1-.024-1.164.178.178,0,0,1,.223-.1l9.32,3.008A4.218,4.218,0,0,1,61.5,59.969l1.777,2.621a.182.182,0,0,1,0,.207l-1.887,2.637a.181.181,0,0,1-.117.074,8.592,8.592,0,0,1-1.336.094"/>
                      <path id="Path_159" data-name="Path 159" d="M63.129,60.707l-2.848,6.582s7.2,9.879,17.691,11.4,17.8-6.4,18.191-13.277c.5-8.867-5.117-16.43-5.117-16.43l-7.98,9.961a6.859,6.859,0,0,1-4.828,7.98c-6.16,2.09-15.109-6.219-15.109-6.219" fill="#ffa000"/>
                      <path id="Path_160" data-name="Path 160" d="M76.1,67.441c-2.965,0-6.191-1.621-8.586-3.164a.183.183,0,0,1-.055-.254.186.186,0,0,1,.254-.051c2.938,1.891,7.141,3.91,10.469,2.781a6.5,6.5,0,0,0,4.605-4.648.179.179,0,0,1,.223-.129.175.175,0,0,1,.129.219A7.382,7.382,0,0,1,76.1,67.441"/>
                      <path id="Path_161" data-name="Path 161" d="M15.668,87.648s14.066,5.207,31.156-1.969c0,0,2.777,13.355-12.367,15.644S15.684,90.434,15.668,87.648"/>
                      <path id="Path_162" data-name="Path 162" d="M40.289,88.43s-.488-8.3-.488-14.223c0-5.234-.9-7.82-1.559-8.418s-3.707-3.008-6.648-3.371-9.578.734-12.066,4S17.211,86.465,18.613,89.2s15.824,2.828,21.676-.773" fill="#ffa000"/>
                      <path id="Path_163" data-name="Path 163" d="M49.27,81.816s-2.77,1.066-4.793-2.352c-1.5-2.539-4.9-12.312-6.234-13.676s-1.168,12.316-1.168,12.316,2.895,6.641,6.738,7.965,5.457-4.254,5.457-4.254" fill="#ffa000"/>
                      <path id="Path_164" data-name="Path 164" d="M20.445,65.52A15.071,15.071,0,0,0,15.57,78.105c.687,6.941,2.023,10.965,9.039,11.629l4.52-3.363s-7.75-3.746-6.856-12.543L20.445,65.52" fill="#ffa000"/>
                      <path id="Path_165" data-name="Path 165" d="M25.238,88.02l5.793-2.141a2.213,2.213,0,0,1,2.313.816l1.445,1.8-9.551-.477" fill="#fff"/>
                      <path id="Path_166" data-name="Path 166" d="M26.137,87.883l8.258.41L33.2,86.809a2.039,2.039,0,0,0-2.113-.754Zm8.652.793h-.008L25.23,88.2a.187.187,0,0,1-.172-.156.177.177,0,0,1,.117-.2l5.793-2.141s.012,0,.016-.008a2.4,2.4,0,0,1,2.5.879l1.445,1.8a.186.186,0,0,1,.019.2.179.179,0,0,1-.164.1"/>
                      <path id="Path_167" data-name="Path 167" d="M27.016,85.988a.175.175,0,0,1-.117-.043,15.061,15.061,0,0,1-4.84-8.793,20.231,20.231,0,0,1-.34-5.027.183.183,0,0,1,.2-.164.177.177,0,0,1,.164.2c-.008.086-.727,8.68,5.051,13.512a.181.181,0,0,1,.024.258.176.176,0,0,1-.141.063"/>
                      <path id="Path_168" data-name="Path 168" d="M49.148,80.5l1.766.7L39.781,89.238c-.148-1.031,5.23-7.773,9.367-8.742" fill="#caddff"/>
                      <path id="Path_169" data-name="Path 169" d="M23.352,90.93l16.43-1.691a46.984,46.984,0,0,0-16.313-1.332,3.108,3.108,0,0,1-.117,3.023" fill="#caddff"/>
                      <path id="Path_170" data-name="Path 170" d="M23,92.051a.87.87,0,0,1-.066-1.738l14.52-1.133,1.93-.5,11.758-8.035a.88.88,0,0,1,1.215.227.868.868,0,0,1-.227,1.211L40.246,90.207a.965.965,0,0,1-.273.125l-2.156.551a.991.991,0,0,1-.148.024L23.074,92.047a.425.425,0,0,1-.07,0" fill="#ffb300"/>
                      <path id="Path_171" data-name="Path 171" d="M51.637,80.68a.676.676,0,0,0-.387.121L39.492,88.832a.2.2,0,0,1-.059.027l-1.934.5a.076.076,0,0,1-.031,0L22.953,90.492a.691.691,0,0,0-.473.242.682.682,0,0,0-.164.5.693.693,0,0,0,.742.633l14.594-1.141c.039,0,.078-.012.117-.02l2.156-.551a.746.746,0,0,0,.219-.1l11.883-8.121a.677.677,0,0,0,.289-.437.666.666,0,0,0-.109-.516A.686.686,0,0,0,51.637,80.68ZM23,92.23a1.05,1.05,0,0,1-.8-1.734,1.031,1.031,0,0,1,.719-.363L37.426,89l1.887-.484L51.043,80.5a1.057,1.057,0,0,1,1.465.273,1.044,1.044,0,0,1,.168.789,1.03,1.03,0,0,1-.441.672L40.352,90.355a1.047,1.047,0,0,1-.336.152l-2.156.551a.911.911,0,0,1-.18.031L23.086,92.23H23"/>
                      <path id="Path_172" data-name="Path 172" d="M27.18,58.73a7,7,0,0,1-3.684.758c-.238-.027-3.215-.41-3.625-2.242-.18-.8-1.191-2.9-1.121-3.727a22.809,22.809,0,0,0-.137-3.918c-.449-2.934,2.688-5.1,3.363-5.531.8-.516,2.676-1.719,4.394-.949a3.4,3.4,0,0,1,1.512,1.441,3.7,3.7,0,0,1,1.3-.8c1.934-.687,4.23.422,5.387,1.992a3.831,3.831,0,0,1,.879,2.535c-.082,1-.66,1.473-1.379,2.563-1.3,1.977-.738,2.43-1.742,4.039A10.281,10.281,0,0,1,27.18,58.73"/>
                      <path id="Path_173" data-name="Path 173" d="M26.168,58.359c.055.269.457,2.9-.586,4.063a5.235,5.235,0,0,1-2.047,1.488s4.773,1.113,7.344.52,2.238-1.262,2.238-1.262l-1.457-.762a1.313,1.313,0,0,1-.7-1.281l.027-.3a3.511,3.511,0,0,0,2.484-.418,3.712,3.712,0,0,0,1.566-3.02c.031-.941-.363-.781-.7-2.48-.285-1.461-.125-2.2-.715-3.312a4.853,4.853,0,0,0-.605-.891,4.364,4.364,0,0,0-2.5.828c-.789.613-.711,1.082-1.5,1.555-1.141.691-2.18.215-2.52.809-.125.219-.168.609.246,1.344,0,0-1.082-.711-1.828-.277a1.194,1.194,0,0,0-.508.664c-.242.793.469,1.887,1.75,2.738" fill="#fff"/>
                      <path id="Path_174" data-name="Path 174" d="M32.949,63.234Zm-8.84.613c1.313.266,4.73.867,6.73.406,1.6-.371,1.984-.758,2.074-.906a.48.48,0,0,0,.031-.066l-1.367-.715a1.483,1.483,0,0,1-.8-1.457l.031-.3a.171.171,0,0,1,.07-.129.193.193,0,0,1,.144-.035,3.292,3.292,0,0,0,2.352-.391,3.56,3.56,0,0,0,1.48-2.871,1.53,1.53,0,0,0-.2-.879,6.041,6.041,0,0,1-.5-1.566c-.1-.5-.145-.926-.184-1.3a4.849,4.849,0,0,0-.512-1.961,4.635,4.635,0,0,0-.527-.789,4.091,4.091,0,0,0-2.3.785,2.964,2.964,0,0,0-.684.75,2.529,2.529,0,0,1-.828.816,3.578,3.578,0,0,1-1.652.465c-.449.043-.687.074-.8.277-.172.3.039.8.242,1.164a.18.18,0,0,1-.035.223.182.182,0,0,1-.223.016c-.008,0-1-.641-1.633-.27a1.024,1.024,0,0,0-.426.559c-.215.707.457,1.726,1.676,2.535a.192.192,0,0,1,.078.117c0,.027.539,2.91-.629,4.219A6.12,6.12,0,0,1,24.109,63.848Zm4.906.941a28.481,28.481,0,0,1-5.52-.7.183.183,0,0,1-.141-.172.18.18,0,0,1,.125-.18A5.172,5.172,0,0,0,25.449,62.3c.938-1.051.621-3.395.551-3.836-1.328-.906-2.02-2.035-1.754-2.9a1.352,1.352,0,0,1,.59-.766,1.759,1.759,0,0,1,1.524.027,1.174,1.174,0,0,1-.008-1.027c.215-.379.621-.414,1.09-.457a3.277,3.277,0,0,0,1.492-.414,2.192,2.192,0,0,0,.719-.715,3.29,3.29,0,0,1,.762-.828,4.528,4.528,0,0,1,2.6-.871.188.188,0,0,1,.145.066,5.083,5.083,0,0,1,.633.922,5.162,5.162,0,0,1,.551,2.09c.039.367.086.781.18,1.273a5.455,5.455,0,0,0,.469,1.477,1.91,1.91,0,0,1,.23,1.047,3.929,3.929,0,0,1-1.656,3.168,3.6,3.6,0,0,1-2.414.473l-.012.109a1.133,1.133,0,0,0,.605,1.106l1.457.762a.188.188,0,0,1,.078.078.457.457,0,0,1-.02.387c-.211.441-1,.824-2.34,1.133a8.724,8.724,0,0,1-1.906.184"/>
                      <path id="Path_175" data-name="Path 175" d="M30.785,61.008a5.037,5.037,0,0,1-3.066-1.371.184.184,0,0,1,0-.258.188.188,0,0,1,.258,0,4.6,4.6,0,0,0,3,1.262A.182.182,0,0,1,31,61a2.086,2.086,0,0,1-.219.008"/>
                      <path id="Path_176" data-name="Path 176" d="M34.059,97.852s9.66-9.937,12.457-12.418,4.734-4.086,7.426-2.7S52.91,95.7,46.684,99.832s-10.117,2.305-10.117,2.305l-2.508-4.285"/>
                      <path id="Path_177" data-name="Path 177" d="M32.516,98.668l-2.5,4.711a7.576,7.576,0,0,0,7.4,2.215c4.934-.949,4.02-2.656,3.031-3.543s-6.066-3.578-7.93-3.383" fill="#fff"/>
                      <path id="Path_178" data-name="Path 178" d="M30.234,103.355a7.533,7.533,0,0,0,7.144,2.059c2.742-.523,3.488-1.258,3.633-1.777.164-.578-.363-1.16-.691-1.453-1-.9-5.707-3.344-7.6-3.344h-.09Zm5.394,2.6a7.59,7.59,0,0,1-5.758-2.461.178.178,0,0,1-.016-.195l2.5-4.715a.184.184,0,0,1,.145-.1c1.957-.2,7.109,2.575,8.066,3.43a1.907,1.907,0,0,1,.8,1.82c-.25.9-1.566,1.586-3.914,2.039a9.6,9.6,0,0,1-1.82.18"/>
                      <path id="Path_179" data-name="Path 179" d="M36.418,105.25A18.577,18.577,0,0,1,33.449,105a.183.183,0,0,1,.066-.359c.047.008,4.668.808,6.313-.535a1.444,1.444,0,0,0,.555-1.141.183.183,0,0,1,.184-.18.186.186,0,0,1,.18.188,1.805,1.805,0,0,1-.687,1.414,6.112,6.112,0,0,1-3.641.867"/>
                      <path id="Path_180" data-name="Path 180" d="M34.258,102.738a.1.1,0,0,1-.031,0,.18.18,0,0,1-.149-.207A7.639,7.639,0,0,1,35.438,99.3a.182.182,0,1,1,.285.227,7.435,7.435,0,0,0-1.285,3.055.183.183,0,0,1-.18.152"/>
                      <path id="Path_181" data-name="Path 181" d="M36.105,103.1a.057.057,0,0,1-.027,0,.181.181,0,0,1-.156-.2,5.928,5.928,0,0,1,1.1-2.891.184.184,0,0,1,.258-.016.179.179,0,0,1,.016.254,5.719,5.719,0,0,0-1.012,2.7.188.188,0,0,1-.18.157"/>
                      <path id="Path_182" data-name="Path 182" d="M34.059,97.852,30.3,104.18s-12.746-3.2-17.727-7.789S5.184,87.746,8,84.734s8.18-1.6,11.613,1.8,9.277,9.145,14.441,11.316"/>
                      <path id="Path_183" data-name="Path 183" d="M20.664,23.266a14.623,14.623,0,0,1,2.316-9.73c6.406-8.856,25.105-7.559,28.738-.328,1.848,3.668-.148,8.945-3.129,11.852-4.406,4.3-11.84,4.254-16.379,1.672-4.32-2.457-5.66-7.023-8.406-6.6-1.523.238-2.539,1.867-3.141,3.133" fill="#ffb300"/>
                      <path id="Path_184" data-name="Path 184" d="M45.367,15.984H29.621a.182.182,0,0,1,0-.363H45.367a.182.182,0,1,1,0,.363" fill="#fff"/>
                      <path id="Path_185" data-name="Path 185" d="M41.18,18.746H33.258a.184.184,0,1,1,0-.367H41.18a.184.184,0,0,1,0,.367" fill="#fff"/>
                      <path id="Path_186" data-name="Path 186" d="M61.953,40.449c.4-.562,4.914-7.125,2.078-14.605-1.988-5.254-7.051-9.512-12.93-9.738-.988-.039-7.242-.285-10.6,4.7a10.66,10.66,0,0,0-.312,11.457c2.609,4.051,7.6,4.629,8.336,4.7,5.18.52,8.031-2.793,10.855-1.2,1.73.98,2.324,3.164,2.57,4.68" fill="#fff"/>
                      <path id="Path_187" data-name="Path 187" d="M57.691,35.148a3.522,3.522,0,0,1,1.781.465c1.293.73,2.156,2.2,2.578,4.359,1.039-1.605,4.316-7.453,1.809-14.066A14.65,14.65,0,0,0,51.1,16.285c-2.148-.082-7.465.2-10.441,4.621a10.493,10.493,0,0,0-.309,11.254c2.488,3.867,7.266,4.531,8.2,4.625a13.847,13.847,0,0,0,6.07-.941A10.2,10.2,0,0,1,57.691,35.148Zm4.262,5.48a.16.16,0,0,1-.043,0,.179.179,0,0,1-.137-.148c-.371-2.293-1.2-3.824-2.48-4.547-1.387-.785-2.789-.324-4.562.262a14.145,14.145,0,0,1-6.223.953c-1.348-.133-5.953-.879-8.469-4.785A10.883,10.883,0,0,1,40.352,20.7c3.078-4.574,8.551-4.867,10.758-4.781a13.925,13.925,0,0,1,8.027,3.023A15.955,15.955,0,0,1,64.2,25.777c2.844,7.512-1.59,14.055-2.1,14.777a.185.185,0,0,1-.149.074"/>
                      <path id="Path_188" data-name="Path 188" d="M59.105,25.633H44.3a.184.184,0,0,1,0-.367h14.8a.184.184,0,1,1,0,.367"/>
                      <path id="Path_189" data-name="Path 189" d="M54.242,27.555H48.949a.182.182,0,1,1,0-.363h5.293a.182.182,0,1,1,0,.363"/>
                      <path id="Path_190" data-name="Path 190" d="M86.215,11.769a.229.229,0,0,1-.074-.016,42.081,42.081,0,0,0-17.52-3.27.18.18,0,0,1-.184-.18.183.183,0,0,1,.18-.184,42.452,42.452,0,0,1,17.668,3.3.184.184,0,0,1-.07.351"/>
                      <path id="Path_191" data-name="Path 191" d="M106.41,39.668a.179.179,0,0,1-.18-.164,34.058,34.058,0,0,0-7.695-18.613,32.687,32.687,0,0,0-4.371-4.3.185.185,0,0,1-.027-.258.181.181,0,0,1,.258-.023,32.9,32.9,0,0,1,4.418,4.34,34.427,34.427,0,0,1,7.777,18.816.183.183,0,0,1-.16.2h-.02"/>
                      <path id="Path_192" data-name="Path 192" d="M98.2,17.4a.184.184,0,0,1-.18-.145A2.428,2.428,0,0,0,96.984,15.5a2.165,2.165,0,0,0-.824-.2,1.08,1.08,0,0,1-.895-.383,1.063,1.063,0,0,1-.031-.9c.059-.215.09-.352.027-.422-.105-.121-.457-.031-.766.047-.453.117-.961.246-1.3-.051a1.187,1.187,0,0,1-.223-1.082c.031-.3.063-.582-.082-.7s-.422-.016-.715.086a1.464,1.464,0,0,1-1.219.055c-.359-.215-.547-.691-.559-1.422a.183.183,0,0,1,.18-.184h0a.182.182,0,0,1,.184.176c.008.59.137.973.379,1.113s.582.027.91-.086c.375-.125.758-.258,1.059-.024s.262.652.223,1.02c-.035.32-.066.625.1.77.2.172.59.07.973-.027.43-.109.879-.223,1.129.066a.761.761,0,0,1,.051.758.744.744,0,0,0-.012.605c.1.16.293.188.625.219a2.53,2.53,0,0,1,.953.246,2.749,2.749,0,0,1,1.227,2.008.18.18,0,0,1-.141.215.109.109,0,0,1-.035,0"/>
                      <path id="Path_193" data-name="Path 193" d="M21.773,92.234a.178.178,0,0,1-.121-.043A33.257,33.257,0,0,1,15.418,84.9a34.469,34.469,0,0,1-5.09-19.977.189.189,0,0,1,.191-.176.186.186,0,0,1,.176.191,34.086,34.086,0,0,0,5.031,19.77,32.817,32.817,0,0,0,6.168,7.211.179.179,0,0,1,.016.254.174.174,0,0,1-.137.063"/>
                      <path id="Path_194" data-name="Path 194" d="M12.328,68.055a.732.732,0,0,0-.367.1.705.705,0,0,0-.238.969.712.712,0,0,0,1.3-.2.71.71,0,0,0-.691-.871Zm0,1.773a1.085,1.085,0,0,1-.922-.512,1.068,1.068,0,0,1-.125-.809,1.052,1.052,0,0,1,.484-.66,1.079,1.079,0,0,1,1.477.355,1.068,1.068,0,0,1-.359,1.469,1.067,1.067,0,0,1-.555.156"/>
                      <path id="Path_195" data-name="Path 195" d="M10.848,60.637a.183.183,0,0,1-.086-.344c.5-.266.766-.547.781-.809s-.234-.5-.477-.727c-.273-.258-.559-.527-.492-.891s.441-.516.777-.645c.285-.117.559-.227.609-.426.055-.234-.2-.52-.453-.8-.285-.316-.586-.648-.449-1,.105-.266.387-.328.633-.383.219-.047.426-.094.52-.258s.027-.324-.09-.617a2.371,2.371,0,0,1-.215-.922,2.652,2.652,0,0,1,1.176-1.937.18.18,0,0,1,.254.027.176.176,0,0,1-.023.254,2.338,2.338,0,0,0-1.043,1.66,2.039,2.039,0,0,0,.191.785,1.019,1.019,0,0,1,.066.93,1.031,1.031,0,0,1-.758.434c-.207.047-.336.082-.371.16-.055.141.176.395.379.617.3.332.641.707.535,1.129-.094.383-.484.539-.828.676-.27.109-.523.207-.555.375s.172.359.387.559a1.369,1.369,0,0,1,.59,1.012c-.023.406-.34.77-.969,1.109a.182.182,0,0,1-.09.023"/>
                      <g id="Group_43" data-name="Group 43">
                        <g id="Group_42" data-name="Group 42" transform="translate(113.014 86.745)">
                          <path id="Path_196" data-name="Path 196" d="M15.8-46.2V-32.3H32.844a4.784,4.784,0,0,1,3.438,1.313,4.377,4.377,0,0,1,1.391,3.344,4.172,4.172,0,0,1-1.391,3.078,4.713,4.713,0,0,1-3.437,1.344H15.8V-4.812a4.548,4.548,0,0,1-1.469,3.438A4.833,4.833,0,0,1,10.891,0,4.943,4.943,0,0,1,7.3-1.344,4.628,4.628,0,0,1,5.922-4.812V-50.469A4.644,4.644,0,0,1,7.3-53.891a4.668,4.668,0,0,1,3.438-1.391H36.406a4.766,4.766,0,0,1,3.422,1.313,4.376,4.376,0,0,1,1.391,3.344,4.186,4.186,0,0,1-1.391,3.094A4.73,4.73,0,0,1,36.406-46.2Zm0,0" fill="#263238"/>
                        </g>
                      </g>
                      <g id="Group_45" data-name="Group 45">
                        <g id="Group_44" data-name="Group 44" transform="translate(157.394 86.745)">
                          <path id="Path_197" data-name="Path 197" d="M14.063-4.812a4.754,4.754,0,0,1-1.344,3.438A4.56,4.56,0,0,1,9.313,0,4.531,4.531,0,0,1,5.922-1.375,4.738,4.738,0,0,1,4.578-4.812V-37.437a4.7,4.7,0,0,1,1.344-3.422A4.515,4.515,0,0,1,9.313-42.25a4.543,4.543,0,0,1,3.406,1.391,4.711,4.711,0,0,1,1.344,3.422ZM9.234-47.375a6.239,6.239,0,0,1-3.8-.875,3.7,3.7,0,0,1-1.109-3.078v-1.5a3.56,3.56,0,0,1,1.188-3.078,6.479,6.479,0,0,1,3.8-.875,6.367,6.367,0,0,1,3.859.875,3.694,3.694,0,0,1,1.109,3.078v1.5A3.671,3.671,0,0,1,13.141-48.2,6.864,6.864,0,0,1,9.234-47.375Zm0,0" fill="#263238"/>
                        </g>
                      </g>
                      <g id="Group_47" data-name="Group 47">
                        <g id="Group_46" data-name="Group 46" transform="translate(176.03 86.745)">
                          <path id="Path_198" data-name="Path 198" d="M25.5-8.922a2.635,2.635,0,0,1,2.016,1.063,4.209,4.209,0,0,1,.906,2.813,4.23,4.23,0,0,1-2.328,3.594A9.723,9.723,0,0,1,20.844,0a15.279,15.279,0,0,1-8.25-2.094Q9.23-4.186,9.234-10.984V-32.766H5.609a4.281,4.281,0,0,1-3.156-1.266,4.281,4.281,0,0,1-1.266-3.156,4.055,4.055,0,0,1,1.266-3.047,4.368,4.368,0,0,1,3.156-1.219H9.234v-5.062a4.644,4.644,0,0,1,1.375-3.422,4.691,4.691,0,0,1,3.453-1.391,4.433,4.433,0,0,1,3.313,1.391,4.711,4.711,0,0,1,1.344,3.422v5.063h5.609a4.288,4.288,0,0,1,3.156,1.266,4.257,4.257,0,0,1,1.266,3.156,4.08,4.08,0,0,1-1.266,3.047,4.375,4.375,0,0,1-3.156,1.219H18.719v21.391a3.03,3.03,0,0,0,.859,2.406,3.526,3.526,0,0,0,2.375.75,6.8,6.8,0,0,0,1.734-.312A4.816,4.816,0,0,1,25.5-8.922Zm0,0" fill="#263238"/>
                        </g>
                      </g>
                      <g id="Group_49" data-name="Group 49">
                        <g id="Group_48" data-name="Group 48" transform="translate(206.684 87.264)">
                          <path id="Path_199" data-name="Path 199" d="M42.406-55.281a3.828,3.828,0,0,1,2.719,1A3.4,3.4,0,0,1,46.2-51.641a3.3,3.3,0,0,1-1.078,2.609,3.966,3.966,0,0,1-2.719.938H28.344V-3.8A3.614,3.614,0,0,1,27.2-1.109,3.948,3.948,0,0,1,24.328,0a3.959,3.959,0,0,1-2.891-1.109A3.6,3.6,0,0,1,20.3-3.8v-44.3H6.313a3.839,3.839,0,0,1-2.719-.984,3.415,3.415,0,0,1-1.062-2.641,3.325,3.325,0,0,1,1.063-2.562,3.815,3.815,0,0,1,2.719-1Zm0,0" fill="#263238"/>
                        </g>
                      </g>
                      <g id="Group_51" data-name="Group 51">
                        <g id="Group_50" data-name="Group 50" transform="translate(252.168 87.264)">
                          <path id="Path_200" data-name="Path 200" d="M36.406-41.375a3.612,3.612,0,0,1,2.719,1.109,3.7,3.7,0,0,1,1.063,2.672v21.016q0,8.2-4.547,12.75T22.828.7Q14.608.7,10.109-3.828q-4.5-4.547-4.5-12.75V-37.594a3.684,3.684,0,0,1,1.063-2.672,3.507,3.507,0,0,1,2.641-1.109,3.629,3.629,0,0,1,2.734,1.109,3.7,3.7,0,0,1,1.063,2.672v21.016q0,10.348,9.719,10.344,4.811,0,7.328-2.609t2.531-7.734V-37.594a3.684,3.684,0,0,1,1.063-2.672A3.559,3.559,0,0,1,36.406-41.375Zm0,0" fill="#263238"/>
                        </g>
                      </g>
                      <g id="Group_53" data-name="Group 53">
                        <g id="Group_52" data-name="Group 52" transform="translate(294.731 87.264)">
                          <path id="Path_201" data-name="Path 201" d="M16.828-34.031V-10.5q0,3.955,3.547,3.953a5.7,5.7,0,0,0,1.5-.281,5.642,5.642,0,0,1,1.5-.281,2.15,2.15,0,0,1,1.734.875,3.337,3.337,0,0,1,.719,2.2,3.379,3.379,0,0,1-1.906,2.844A7.847,7.847,0,0,1,19.656,0a19.353,19.353,0,0,1-4.766-.547,7.15,7.15,0,0,1-3.875-2.813q-1.705-2.25-1.7-6.828V-34.031H4.734a3.368,3.368,0,0,1-2.484-.984,3.416,3.416,0,0,1-.984-2.5,3.214,3.214,0,0,1,.984-2.437,3.438,3.438,0,0,1,2.484-.953H9.313v-6.641a3.684,3.684,0,0,1,1.063-2.672,3.654,3.654,0,0,1,2.734-1.109,3.519,3.519,0,0,1,2.641,1.109,3.666,3.666,0,0,1,1.078,2.672v6.641h6.547a3.368,3.368,0,0,1,2.484.984,3.368,3.368,0,0,1,.984,2.484,3.261,3.261,0,0,1-.984,2.453,3.422,3.422,0,0,1-2.484.953Zm0,0" fill="#263238"/>
                        </g>
                      </g>
                      <g id="Group_55" data-name="Group 55">
                        <g id="Group_54" data-name="Group 54" transform="translate(321.501 87.264)">
                          <path id="Path_202" data-name="Path 202" d="M44.781-20.687A22.125,22.125,0,0,1,42.016-9.625a20.1,20.1,0,0,1-7.547,7.656A20.686,20.686,0,0,1,23.922.8,20.686,20.686,0,0,1,13.375-1.969,20.113,20.113,0,0,1,5.844-9.625,22.126,22.126,0,0,1,3.078-20.687,22.489,22.489,0,0,1,5.844-31.812a19.961,19.961,0,0,1,7.531-7.75,20.686,20.686,0,0,1,10.547-2.766,20.686,20.686,0,0,1,10.547,2.766,19.945,19.945,0,0,1,7.547,7.75A22.489,22.489,0,0,1,44.781-20.687Zm-7.516,0a16.032,16.032,0,0,0-1.781-7.625,13.029,13.029,0,0,0-4.813-5.2,12.679,12.679,0,0,0-6.75-1.859,12.717,12.717,0,0,0-6.75,1.859,13.138,13.138,0,0,0-4.812,5.2,16.032,16.032,0,0,0-1.781,7.625,15.575,15.575,0,0,0,1.781,7.5,13.288,13.288,0,0,0,4.813,5.172,12.682,12.682,0,0,0,6.75,1.859,12.644,12.644,0,0,0,6.75-1.859,13.176,13.176,0,0,0,4.813-5.172A15.575,15.575,0,0,0,37.266-20.687Zm0,0" fill="#263238"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <Link className="btn btn-outline-blue-gray-8" to={'/'}><h5 className="m-1">Iniciar sesión</h5></Link>
                <Link className="btn btn-blue-gray-8 ms-4" to={'/signUp'}><h5 className="m-1">Registrarse</h5></Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

  );
}


