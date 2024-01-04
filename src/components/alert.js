import React from "react";
function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
export default Alert;

//working
// firstly alert is included in app.js (<Alert alert={alert} />)
// and alert is set as null (const [alert, setAlert] = useState(null);)
// in alert.js due to this code { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} , props.alert agar null ya false hoga to age wali block execute nhi hoga.
