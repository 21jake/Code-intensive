const component = {};
component.welcomePage = `<h1>Welcome you</h1>`;
component.registerPage = `
    <div class="resigter_container">
            <form action="" id="register_form">
                <div id="register_header">MindX Chat</div>
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" name="firstName" placeholder="First Name">
                        <div class="error" id="first-name-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="lastName" placeholder="Last Name">
                        <div class="error" id="last-name-error"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Password">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Confirm password" name="confirmPassword">
                    <div class="error" id="confirm-password-error"></div>
                </div>
                <div class="form-action">
                    <div>Already have an account?  <span class="cursor-pointer" >Login</span></div>
                    <button type="submit" class="btn cursor-pointer">Register</button>
                </div>
            </form>
        </div>
`
component.loginPage = `
    <div class="login_container">
        <form action="" id="login_form">
            <div id="login_header">MindX Chat</div>
            <div class="input-wrapper">
                <input type="email" name="email" placeholder="Email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password">
                <div class="error" id="password-error"></div>
            </div>
    
            <div class="form-action">
                <div>Don't have an account?  <span class="cursor-pointer" ">Register!</span></div>
                <button type="submit" class="btn cursor-pointer">Login</button>
            </div>
        </form>
    </div>
`
component.chatPage = `
    <div class="chat-container">
        <div class="header">
            My Chat
        </div>
        <div class="main">
            <div class="conversation-detail">
                <div class="conversation-title">First conversation</div>
                <div class="list-messages">
                    <div class="message mine">
                        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos pariatur impedit quaerat quod molestias iste, at quo officiis quam possimus, ipsam eligendi explicabo. Beatae laborum eum cum ratione doloribus officia.</div>
                    </div>
                    <div class="message mine">
                        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos pariatur impedit quaerat quod molestias iste, at quo officiis quam possimus, ipsam eligendi explicabo. Beatae laborum eum cum ratione doloribus officia.</div>
                    </div>
                    <div class="message their">
                        <div class="owner">abc@myspace.com</div>
                        <div class="content">Hellow World</div>
                    </div>
                    <div class="message their">
                        <div class="owner">abc@myspace.com</div>
                        <div class="content">Hellow World</div>
                    </div>

                </div>
                <form action="" id="send-message-form">
                    <div class="input-wrapper">
                        <input type="text" placeholder="Type your message" name="message">
                    </div>
                    <button type="submit"> <i class="fab fa-telegram-plane"></i></button>
                </form>


            </div>
        </div>
    </div> 
`