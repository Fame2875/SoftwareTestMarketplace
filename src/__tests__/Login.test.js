import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../Page/Login/Login";

test("Box input show error if valid text", async() => {
            render( < Login onSubmit = {
                    () => {}
                }
                />);

                //const uname = screen.getByPlaceholderText(/username/);
                //expect(uname).toBeInTheDocument();

                const submitButton = screen.getByTestId(/submit/); fireEvent.click(submitButton);

                const ErrorMessage = screen.getByText(/ใส่ข้อมูลให้ถูกต้อง/); expect(ErrorMessage).not.toBeInTheDocument();
            });