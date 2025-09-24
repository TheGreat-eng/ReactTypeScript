import TodoData from "./todo.data";
import { useState } from "react";
import ToDoInput from "./todo.input";

const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React", completed: true },
        { id: 2, title: "Learn TypeScript", completed: false },
        { id: 3, title: "Build a Todo App", completed: false },
    ]);

    const handleAddTodo = (title: string) => {
        const newTodo = {
            id: Date.now(), // Sử dụng timestamp để tránh trùng ID
            title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <div style={{
                maxWidth: "800px",
                margin: "0 auto",
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                backdropFilter: "blur(10px)"
            }}>
                {/* Header */}
                <div style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    padding: "40px 30px",
                    textAlign: "center",
                    color: "white"
                }}>
                    <h1 style={{
                        margin: "0 0 10px 0",
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
                    }}>
                        ✨ My Todo List ✨
                    </h1>
                    <p style={{
                        margin: "0",
                        fontSize: "1.1rem",
                        opacity: "0.9"
                    }}>
                        Stay organized and productive
                    </p>
                </div>

                {/* Stats */}
                <div style={{
                    padding: "20px 30px",
                    background: "linear-gradient(90deg, #f093fb 0%, #f5576c 100%)",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{totalCount}</div>
                        <div style={{ fontSize: "0.9rem", opacity: "0.9" }}>Total Tasks</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{completedCount}</div>
                        <div style={{ fontSize: "0.9rem", opacity: "0.9" }}>Completed</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{totalCount - completedCount}</div>
                        <div style={{ fontSize: "0.9rem", opacity: "0.9" }}>Remaining</div>
                    </div>
                </div>

                {/* Input Section */}
                <div style={{
                    padding: "30px",
                    borderBottom: "2px solid #f0f0f0"
                }}>
                    <ToDoInput onAddTodo={handleAddTodo} />
                </div>

                {/* Todo List */}
                <div style={{ padding: "30px" }}>
                    <TodoData
                        todos={todos}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        owner={"provip"}
                        age={25}
                        isDeveloper={true}
                    />
                </div>

                {/* Footer */}
                <div style={{
                    padding: "20px 30px",
                    background: "#f8f9fa",
                    textAlign: "center",
                    color: "#6c757d",
                    fontSize: "0.9rem"
                }}>
                    Made with ❤️ using React & TypeScript
                </div>
            </div>
        </div>
    );
};

export default ToDoList;