export default function Flower({
  image,
  x = 0,
  y = 0,
  width,
  height,
  message = "",
  rotate = 0,
  onClick,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  transformOrigin,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        cursor: 'pointer',
        width,
        height,
        userSelect: 'none',
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={image}
        alt="flower"
        style={{
          width,
          height,
          transform: `rotate(${rotate}deg)`,
          transformOrigin: transformOrigin,
        }}
      />
      {isHovered && message && (
        <div
          style={{
            position: 'absolute',
            bottom: '103%',
            left: '100%',
            background: '#222',
            color: '#fff',
            borderRadius: '8px',
            padding: '4px 8px',
            fontSize: '14px',
            boxShadow: '0 4px 16px #0006',
            border: '1.5px solid #fff',
            whiteSpace: 'nowrap',
            marginTop: '2px',
            pointerEvents: 'none',
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}
