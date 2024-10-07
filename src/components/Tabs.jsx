export default function Tabs({ children, buttons, ButtonsWrapper }) {
  return (
    <>
      <ButtonsWrapper>
        {/* ButtonsWrapper should be in Caps Because, It can accept any kind of
         classes either builtin like <menu> or use defined components like CoreConcepts.
          If No cap Is used the react Automatically thinks it has to look for built in
           html components or variables declared which cant be foound */}
        {/* wraps my buttons  */}
        {buttons}
      </ButtonsWrapper>
      {children} {/*   Actual Content */}
    </>
  );
}
