

const InfiniteLooper = () => {

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}