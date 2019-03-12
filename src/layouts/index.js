import './index.css';

function BasicLayout(props) {
  return (
    <div className="layout-normal">
      <h1 className="title">Yay! Welcome to umi!</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
