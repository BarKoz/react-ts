export const Tel = (props: { tel: number }) => (
  <a href={"tel:" + props.tel}>tel: {props.tel}</a>
);
