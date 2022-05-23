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
  left,
  zIndex,
  zIndexBackdrop
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
            zIndex={zIndex}
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
          <Backdrop zIndexBackdrop={zIndexBackdrop} onClick={handleClose}
            style={{
              opacity: state === ENTERED ? .7 : 0,
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
  zIndex: props.zIndex,
  bottom: props.bottom,
  top: props.top,
  left: props.left,
  right: props.right,
}))

const Backdrop = styled.div(props => ({
  position: 'fixed',
  width: '100%',
  height: '100vh',
  backgroundColor: '#000000',
  zIndex: props.zIndexBackdrop,
  top: 0,
  left: 0,
}))

export default Basic;