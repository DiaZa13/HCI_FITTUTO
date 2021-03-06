import React, { Component } from "react";
import "./References.scss";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: null,
      Curso: null,
      Commentary: null,
      formErrors: {
        fullName: "",
        curso: "",
        commentary: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        FullName: ${this.state.FullName}
        Curso: ${this.state.curso}
        Commentary: ${this.state.commentary}
      `);
    } else {
      console.error("Error");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(this.state.FullName + ' ' + this.state.Curso + ' ' + this.state.Commentary)
    let formErrors = { ...this.state.formErrors 
    };

    switch (name) {
      case "FullName":
        formErrors.fullName =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "Curso":
        formErrors.curso = 
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "Commentary":
        formErrors.commentary =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
/*
  const styles = {

  };
  const stars = Array(5).fill(0);
  const [currentValue,setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleClick = value => {
    setCurrentValue(value)
  }
*/

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Tu opinion es importante</h1>
          <form className="Holas"onSubmit={this.handleSubmit} onSubmit={this.enviarDatos} noValidate>
            <div className="email">
              <label htmlFor="FullName">Ingrese Su Nombre Completo</label>
              <input
                className={formErrors.fullName.length > 0 ? "error" : null}
                placeholder="Nombre Completo"
                type="text"
                name="FullName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fullName.length > 0 && (
                <span className="errorMessage">{formErrors.fullName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="Curso">Curso</label>
              <input
                className={formErrors.curso.length > 0 ? "error" : null}
                placeholder="Ingrese el curso"
                type="text"
                name="Curso"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.curso.length > 0 && (
                <span className="errorMessage">{formErrors.curso}</span>
              )}
            </div>
            <div className="commentary">
              <label htmlFor="Commentary">Ingrese su comentario</label>
              <input
                className={formErrors.commentary.length > 0 ? "error" : null}
                placeholder="comentario"
                type="text"
                name="Commentary"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.commentary.length > 0 && (
                <span className="errorMessage">{formErrors.commentary}</span>
              )}
            </div>
            <div className="YourOpinion">
              <button className="btn" type="submit">Guardar cambios</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;