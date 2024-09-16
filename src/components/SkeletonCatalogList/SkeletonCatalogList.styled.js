const view = window.innerWidth;

function setStyleForResponseGridTemplateColumns() {
  switch (true) {
    case view < 480:
      return 'auto';
    case view >= 480 && view < 768:
      return 'repeat(2, auto)';
    case view >= 768 && view < 1440:
      return 'repeat(3, auto)';
    case view >= 1440:
      return 'repeat(4, auto)';
    default:
      return;
  }
}

function setWidthResponse() {
  switch (true) {
    case view >= 768:
      return '212px';
    case view >= 380:
      return '140px';
    case view < 379:
      return '212px';
    default:
      return;
  }
}

export const styleImg = {
  width: `${setWidthResponse()}`,
  height: 212,
  borderRadius: 2,
  mb: '12px',
};
export const styleWrapper = {
  display: 'grid',
  justifyContent: 'center',
  gap: '12px',
  gridTemplateColumns: `${setStyleForResponseGridTemplateColumns()}`,
};
