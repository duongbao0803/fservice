import React, { useEffect, useRef } from "react";

const InfiniteList = ({
  children,
  loader,
  fetchMore,
  hasMore,
  endMessage,
  className,
}) => {
  const pageEndRef = useRef(null);
  useEffect(() => {
    if (hasMore) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // kiểm tra element có nằm trong viewport không?
          fetchMore();
        }
      });

      if (pageEndRef.current) {
        observer.observe(pageEndRef.current);
      }

      return () => {
        if (pageEndRef.current) {
          observer.unobserve(pageEndRef.current);
        }
      };
    }
  }, [hasMore]);
  return (
    <div className={className}>
      {children}

      {hasMore ? <div ref={pageEndRef}>{loader}</div> : <div style={{textAlign:'center', marginTop:'1rem'}}>{endMessage}</div>}
    </div>
  );
};

export default InfiniteList;
