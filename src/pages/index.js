import './index.css';
import { Button } from 'antd'

export default function() {
  return (
    <div className="normal">
      <div className="welcome" />
      <ul className="list">
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <Button>
            Getting Started
          </Button>
        </li>
      </ul>
    </div>
  );
}
