import React, { useContext } from 'react';
import { ThemeContext } from './ContextDemo';
function ThemeButton() {
  const context = useContext(ThemeContext);
  return (
    <div>
      父级传递：{context}
    </div>
  )
}
export default ThemeButton;