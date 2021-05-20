import React from 'react';
import SignUpForm from './signUpForm';
import history from '../utils/history';
import logo from '../../assets/logo.svg';

function SignUpFormcontainer() {
  // const handleClick = () =>{
  //     history.push('/');
  //     history.go();
  // };

  return (
    <div className="d-flex flex-column mt-3">
      <div className="form-max-width mx-auto text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="300.924" height="72.152" viewBox="0 0 419.924 72.152">
          <g id="surface1" transform="translate(63.131 -170.75)">
            <g id="letterF" transform="translate(61.219 155.194)">
              <g id="Group_1" data-name="Group 1" transform="translate(158.296 78.6)">
                <path id="Path_1" data-name="Path 1" d="M13.563-45.531v15.5H31.984a3.561,3.561,0,0,1,2.578.984,3.351,3.351,0,0,1,1.016,2.531,3.106,3.106,0,0,1-1.016,2.328,3.582,3.582,0,0,1-2.578.969H13.563V-3.594a3.4,3.4,0,0,1-1.094,2.547A3.566,3.566,0,0,1,9.891,0,3.547,3.547,0,0,1,7.266-1.047,3.457,3.457,0,0,1,6.219-3.594V-48.828a3.464,3.464,0,0,1,1.047-2.547,3.473,3.473,0,0,1,2.547-1.047H35.344a3.523,3.523,0,0,1,2.578.984,3.351,3.351,0,0,1,1.016,2.531,3.194,3.194,0,0,1-1.047,2.359,3.513,3.513,0,0,1-2.547,1.016Zm0,0"/>
              </g>
            </g>
            <g id="letterI" transform="translate(76.46 176.351)">
              <g id="Group_3" data-name="Group 3" transform="translate(206.749 26.179)">
                <path id="Path_2" data-name="Path 2" d="M13.625-23.347A1.81,1.81,0,0,1,12.5-21.782a5.232,5.232,0,0,1-2.609.624,5.038,5.038,0,0,1-2.672-.624,1.815,1.815,0,0,1-1-1.566V-50.279A1.787,1.787,0,0,1,7.266-51.8a5.2,5.2,0,0,1,2.688-.624,5.075,5.075,0,0,1,2.578.624,1.794,1.794,0,0,1,1.094,1.519Zm0,0" transform="translate(-6.219 52.422)"/>
              </g>
            </g>
            <g id="letterT" transform="translate(92.607 155.194)">
              <g id="Group_5" data-name="Group 5" transform="translate(220.374 78.6)">
                <path id="Path_3" data-name="Path 3" d="M40.219-52.422a3.662,3.662,0,0,1,2.578.938,3.247,3.247,0,0,1,1.016,2.5A3.157,3.157,0,0,1,42.8-46.5a3.777,3.777,0,0,1-2.578.891H26.891V-3.594A3.4,3.4,0,0,1,25.8-1.047,3.763,3.763,0,0,1,23.063,0a3.789,3.789,0,0,1-2.734-1.047A3.413,3.413,0,0,1,19.25-3.594V-45.609H5.984a3.648,3.648,0,0,1-2.578-.937,3.228,3.228,0,0,1-1.016-2.5,3.155,3.155,0,0,1,1.016-2.437,3.648,3.648,0,0,1,2.578-.937Zm0,0"/>
              </g>
            </g>
            <g id="letterT-2" data-name="letterT" transform="translate(-148.218 82.953)">
              <g id="Group_7" data-name="Group 7" transform="translate(158.296 150.091)">
                <path id="Path_4" data-name="Path 4" d="M40.219-52.422a3.662,3.662,0,0,1,2.578.938,3.247,3.247,0,0,1,1.016,2.5A3.157,3.157,0,0,1,42.8-46.5a3.777,3.777,0,0,1-2.578.891H26.891V-3.594A3.4,3.4,0,0,1,25.8-1.047,3.763,3.763,0,0,1,23.063,0a3.789,3.789,0,0,1-2.734-1.047A3.413,3.413,0,0,1,19.25-3.594V-45.609H5.984a3.648,3.648,0,0,1-2.578-.937,3.228,3.228,0,0,1-1.016-2.5,3.155,3.155,0,0,1,1.016-2.437,3.648,3.648,0,0,1,2.578-.937Zm0,0"/>
              </g>
            </g>
            <g id="letterU" transform="translate(-148.218 82.953)">
              <g id="Group_9" data-name="Group 9" transform="translate(204.499 150.091)">
                <path id="Path_5" data-name="Path 5" d="M43.359-52.5a3.264,3.264,0,0,1,2.516,1.016,3.662,3.662,0,0,1,.938,2.578v28.766A21.478,21.478,0,0,1,44.188-9.516a19.122,19.122,0,0,1-7.234,7.391A20.289,20.289,0,0,1,26.594.531a20.77,20.77,0,0,1-10.5-2.656A19.039,19.039,0,0,1,8.828-9.516,21.552,21.552,0,0,1,6.219-20.141V-48.906a3.442,3.442,0,0,1,1.047-2.578A3.7,3.7,0,0,1,9.953-52.5a3.511,3.511,0,0,1,2.516,1.047,3.4,3.4,0,0,1,1.094,2.547v28.766a13.714,13.714,0,0,0,1.8,7,12.838,12.838,0,0,0,4.781,4.828,12.734,12.734,0,0,0,6.453,1.719A13.354,13.354,0,0,0,33.25-8.312a12.907,12.907,0,0,0,4.906-4.828,13.545,13.545,0,0,0,1.828-7V-48.906a3.777,3.777,0,0,1,.891-2.578A3.157,3.157,0,0,1,43.359-52.5Zm0,0"/>
              </g>
            </g>
            <g id="letterT-3" data-name="letterT" transform="translate(-148.218 82.953)">
              <g id="Group_11" data-name="Group 11" transform="translate(257.515 150.091)">
                <path id="Path_6" data-name="Path 6" d="M40.219-52.422a3.662,3.662,0,0,1,2.578.938,3.247,3.247,0,0,1,1.016,2.5A3.157,3.157,0,0,1,42.8-46.5a3.777,3.777,0,0,1-2.578.891H26.891V-3.594A3.4,3.4,0,0,1,25.8-1.047,3.763,3.763,0,0,1,23.063,0a3.789,3.789,0,0,1-2.734-1.047A3.413,3.413,0,0,1,19.25-3.594V-45.609H5.984a3.648,3.648,0,0,1-2.578-.937,3.228,3.228,0,0,1-1.016-2.5,3.155,3.155,0,0,1,1.016-2.437,3.648,3.648,0,0,1,2.578-.937Zm0,0"/>
              </g>
            </g>
            <g id="letterO" transform="translate(-148.218 82.953)">
              <g id="Group_13" data-name="Group 13" transform="translate(303.717 150.091)">
                <path id="Path_7" data-name="Path 7" d="M53.844-26.219A28.763,28.763,0,0,1,50.578-12.5a24.838,24.838,0,0,1-9.016,9.7A24.342,24.342,0,0,1,28.531.75,24.342,24.342,0,0,1,15.5-2.8a24.935,24.935,0,0,1-9.031-9.7,28.845,28.845,0,0,1-3.25-13.719,28.827,28.827,0,0,1,3.25-13.7A24.839,24.839,0,0,1,15.5-49.609a24.285,24.285,0,0,1,13.031-3.562,24.284,24.284,0,0,1,13.031,3.563,24.742,24.742,0,0,1,9.016,9.688A28.745,28.745,0,0,1,53.844-26.219Zm-7.719,0a22.5,22.5,0,0,0-2.25-10.141,17.414,17.414,0,0,0-6.25-7.109,16.373,16.373,0,0,0-9.094-2.594,16.658,16.658,0,0,0-9.109,2.547,17.312,17.312,0,0,0-6.25,7.078,22.778,22.778,0,0,0-2.234,10.219,22.615,22.615,0,0,0,2.234,10.156,17.6,17.6,0,0,0,6.25,7.125,16.486,16.486,0,0,0,9.109,2.578,16.425,16.425,0,0,0,9.094-2.578,17.483,17.483,0,0,0,6.25-7.125A22.519,22.519,0,0,0,46.125-26.219Zm0,0"/>
              </g>
            </g>
            <path id="square" d="M12.469,95.949h57.14v57.14H12.469Zm0,0" transform="translate(-75.599 74.801)" fill="#263238"/>
            <path id="triangle" d="M12.469,72.742l28.57-49.48,28.57,49.48Zm0,0" transform="translate(-75.6 170.16)" fill="#ffb300"/>
            <path id="circle" d="M94.02,19.43a10.151,10.151,0,0,0-1.951.193q-.482.1-.952.238t-.924.331c-.3.126-.6.265-.887.42s-.569.323-.842.5-.535.377-.787.585-.495.427-.727.659-.451.473-.659.726-.4.517-.584.789-.35.552-.5.842a9.721,9.721,0,0,0-.42.886c-.126.3-.235.611-.331.924a9.5,9.5,0,0,0-.238.952q-.1.482-.145.971t-.048.98q0,.492.048.98t.145.971a9.5,9.5,0,0,0,.238.952c.1.314.205.622.331.924a9.75,9.75,0,0,0,.42.887q.232.433.5.842t.584.788q.312.379.659.727t.727.659q.379.312.787.584t.842.5A10.005,10.005,0,0,0,91.117,39a9.473,9.473,0,0,0,.952.238q.482.1.971.145t.98.048q.49,0,.98-.048t.971-.145A9.5,9.5,0,0,0,96.922,39a9.968,9.968,0,0,0,1.81-.751q.435-.232.842-.5t.789-.584q.38-.312.726-.659c.232-.232.451-.474.659-.727s.4-.515.585-.788.35-.554.5-.842.294-.585.42-.887.235-.61.331-.924.174-.63.238-.952a9.682,9.682,0,0,0,.144-.971q.049-.488.049-.98t-.049-.98a9.685,9.685,0,0,0-.144-.971q-.1-.482-.238-.952c-.1-.313-.205-.621-.331-.924s-.265-.6-.42-.886-.323-.57-.5-.842-.377-.535-.585-.789a10.161,10.161,0,0,0-1.385-1.385q-.382-.312-.789-.585t-.842-.5q-.433-.232-.886-.42t-.924-.331q-.47-.142-.952-.238a10.151,10.151,0,0,0-1.951-.193Zm0,0" transform="translate(192.893 155.144)" fill="#ffb300"/>
            <rect id="Rectangle_2" data-name="Rectangle 2" width="25" height="6" rx="3" transform="translate(171.967 203.948)" fill="#263238"/>
          </g>
        </svg>

      </div>
      <span className="divider"/>
      <div className="form-max-width mx-auto">
        <h4 className="mt-3 text-secondary">Regístrate</h4>
        <h5 className="sub-title">Encuentra el tutor perfecto para tus hijos</h5>
      </div>
      <SignUpForm />
      <p className="text-center mb-0 mt-1">
        <span className="me-2">
          ¿Ya tienes cuenta?
        </span>
        <button className="w-75% signIn">Iniciar Sesión</button>
      </p>
    </div>
  );
}

export default SignUpFormcontainer;
