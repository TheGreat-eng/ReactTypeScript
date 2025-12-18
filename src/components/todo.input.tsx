import { useState } from "react";

interface IProps {
    onAddTodo: (title: string) => void;
}




const ToDoInput = (props: IProps) => {
    const [title, setTitle] = useState("");

    const handleAddButton = () => {
        if (title.trim()) {
            props.onAddTodo(title);
            setTitle("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddButton();
        }
    };

    return (
        <div style={{
            display: "flex",
            gap: "15px",
            alignItems: "center"
        }}>
            <input
                type="text"
                placeholder="✍️ Add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{
                    flex: "1",
                    padding: "15px 20px",
                    fontSize: "1rem",
                    border: "2px solid #e9ecef",
                    borderRadius: "50px",
                    outline: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = "#667eea";
                    e.target.style.boxShadow = "0 4px 20px rgba(102, 126, 234, 0.3)";
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = "#e9ecef";
                    e.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
                }}
            />
            <button
                onClick={handleAddButton}
                disabled={!title.trim()}
                style={{
                    padding: "15px 30px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "white",
                    background: title.trim()
                        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        : "#ccc",
                    border: "none",
                    borderRadius: "50px",
                    cursor: title.trim() ? "pointer" : "not-allowed",
                    transition: "all 0.3s ease",
                    boxShadow: title.trim()
                        ? "0 4px 15px rgba(102, 126, 234, 0.4)"
                        : "none",
                    transform: "translateY(0)"
                }}
                onMouseEnter={(e) => {
                    if (title.trim()) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = title.trim()
                        ? "0 4px 15px rgba(102, 126, 234, 0.4)"
                        : "none";
                }}
            >
                ➕ Add Task
            </button>
        </div>
    );
};

export default ToDoInput;