// src/components/BackButton.jsx
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#fff',
        
       
      }}
    >
      <svg width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>

    </button>
  );
}

export default BackButton;