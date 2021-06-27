import { Link } from "react-router-dom";

export function logoutNavbar(login, language, theme, logoutHanlder) {
  return login ? (
    <div
      onClick={logoutHanlder}
      className="navbar-login"
      style={{ color: theme.boldText }}
    >
      <p>{language.logout}</p>
    </div>
  ) : (
    <Link to="/login">
      <div className="navbar-login" style={{ color: theme.boldText }}>
        <p>{language.login}</p>
      </div>
    </Link>
  );
}

export function logoutSideNavbar(login, language, theme, logoutHanlder) {
  return login ? (
    <div
      onClick={logoutHanlder}
      className="navbar-mobile-options"
      style={{ color: theme.boldText }}
    >
      <p>{language.logout}</p>
    </div>
  ) : (
    <Link to="/login">
      <div className="navbar-mobile-options" style={{ color: theme.boldText }}>
        <p>{language.login}</p>
      </div>
    </Link>
  );
}
