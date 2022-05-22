import styled from '@emotion/styled';
import React from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group';
import { ENTERED } from 'react-transition-group/Transition';
import useScrollBlock from '../../../hooks/useScrollBlock';

function Basic({
  onClose,
  in: inProp,
  children,
  width,
  duration = 150,
  top,
  bottom,
  right,
  left
}) {
  const [blockScroll, allowScroll] = useScrollBlock();
  const body = document.body;

  if (inProp) blockScroll()
  if (!inProp) allowScroll()

  const handleClose = React.useCallback(() => {
    if (typeof onClose === 'function') onClose();
  }, [onClose])

  const onEscKeyDown = React.useCallback(e => {
    if (e.key !== "Escape") return;
    handleClose();
  }, [handleClose]);

  React.useEffect(() => {
    if (inProp) window.addEventListener("keydown", onEscKeyDown, false);
    return () => {
      if (inProp) window.removeEventListener("keydown", onEscKeyDown, false);
    }
  }, [inProp, onEscKeyDown])

  return ReactDOM.createPortal(
    <Transition
      in={inProp}
      timeout={duration}
      unmountOnExit={true}
      appear
    >
      {state => (
        <PopUp>
          <Wrapper
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            style={{
              opacity: state === ENTERED ? 1 : 0,
              maxWidth: width,
            }}
          >
            {children}
          </Wrapper>
          <Backdrop onClick={handleClose}
            style={{
              opacity: state === ENTERED ? .5 : 0,
            }}
          ></Backdrop>
        </PopUp>
      )}
    </Transition>,
    body
  )
}

const PopUp = styled.div`
  overflow: hidden;
  position: relative;
`

const Wrapper = styled.div(props => ({
  position: 'fixed',
  zIndex: '11',
  bottom: props.bottom,
  top: props.top,
  left: props.left,
  right: props.right,
}))

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  z-index: 10;
  top: 0;
  left: 0;
`


export default Basic;