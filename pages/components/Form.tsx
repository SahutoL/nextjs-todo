import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "../../styles/sass/style.module.scss";

const Form = (props: any) => {
	const [text, setText] = useState("");

	const submitText = () => {
	    if (text === "") {
	 		alert("Todoを入力してください");
			return;
		}

        props.addTodo(uuidv4(), text, false, false);
		setText("");
     }

	return (
		<form className={styles.form} onSubmit={(e) => e.preventDefault()}>
			<input
				className={styles.form_txt}
				type="text"
				placeholder="TODO"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
            <input className={styles.form_submit} type="submit" value="追加" onClick={submitText} />
		</form>
	);
};

export default Form;

