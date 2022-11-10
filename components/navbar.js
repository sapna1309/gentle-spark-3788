const navbar=()=>{
    return `<div id="BB_main">

                <div id="top_options">
                    <div id="first_dropdwn">
                        Save big with our app!              
                    </div>

                    <div id="second_dropdwn">
                        <button id="second_dropbtn_btn">Language ▼</button>
                        <div class="dropdown-content" style="overflow-y: scroll;">
                        <a href="#">English</a>
                        <a href="#">Chinese</a>
                        <a href="#">Persian</a>
                        <a href="#">Russian</a>
                        <a href="#">Portuguese</a>
                        <a href="#">Turkish</a>
                        <a href="#">Italian</a>
                        <a href="#">French</a>
                        <a href="#">Spanish</a>
                        <a href="#">Korean</a>
                        </div>
                    </div>

                    <div id="third_dropdwn">
                        <button id="third_dropbtn_btn">Support Center ▼</button>
                            <div class="dropdown-content" style="height:100px">
                            <a href="#">Live Chat</a>
                            <a href="#">Ticket </a>
                            <a href="#">Help Center</a>
                        </div>
                    </div>
                </div>

                <div id="top_navbar_second">

                    <div id="top_navbar_second_img">
                        <img id="nav_logo" src="./sign page/images/logo.jpg" alt="">
                    </div>

                    <div id="top_navbar_second_login" >

                        <div id="top_navbar_second_user">
                            <img src="https://us.123rf.com/450wm/ylivdesign/ylivdesign1510/ylivdesign151000120/46153782-profile-icon-white-simple-image-isolated-on-blue-background.jpg?ver=6" alt="">
                            <a style="text-decoration: 0;" href="signup.html"><p>Register</p></a>
                        </div>

                        
                        <div id="top_navbar_second_user">
                            <!-- <img src="https://us.123rf.com/450wm/ylivdesign/ylivdesign1510/ylivdesign151000120/46153782-profile-icon-white-simple-image-isolated-on-blue-background.jpg?ver=6" alt=""> -->
                            <a style="text-decoration: 0;" href="signin.html"><p>SignIn</p></a>
                        </div>

                    </div>

                </div>

                <div >
                <div id="top_navbar_last">

                <a href="./index.html"><div class="HP_i">
                    <img id="HP_iconn" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIuNzUgMTJoMTguNWMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNVYxOGwuNzUtLjc1SC43NWwuNzUuNzV2LTQuNzVjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjV6bTAtMS41QTIuNzUgMi43NSAwIDAgMCAwIDEzLjI1VjE4YzAgLjQxNC4zMzYuNzUuNzUuNzVoMjIuNUEuNzUuNzUgMCAwIDAgMjQgMTh2LTQuNzVhMi43NSAyLjc1IDAgMCAwLTIuNzUtMi43NUgyLjc1ek0wIDE4djNhLjc1Ljc1IDAgMCAwIDEuNSAwdi0zQS43NS43NSAwIDAgMCAwIDE4em0yMi41IDB2M2EuNzUuNzUgMCAwIDAgMS41IDB2LTNhLjc1Ljc1IDAgMCAwLTEuNSAwem0tLjc1LTYuNzVWNC41YTIuMjUgMi4yNSAwIDAgMC0yLjI1LTIuMjVoLTE1QTIuMjUgMi4yNSAwIDAgMCAyLjI1IDQuNXY2Ljc1YS43NS43NSAwIDAgMCAxLjUgMFY0LjVhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMTVhLjc1Ljc1IDAgMCAxIC43NS43NXY2Ljc1YS43NS43NSAwIDAgMCAxLjUgMHptLTEzLjI1LTNoN2EuMjUuMjUgMCAwIDEgLjI1LjI1djIuNzVsLjc1LS43NWgtOWwuNzUuNzVWOC41YS4yNS4yNSAwIDAgMSAuMjUtLjI1em0wLTEuNUExLjc1IDEuNzUgMCAwIDAgNi43NSA4LjV2Mi43NWMwIC40MTQuMzM2Ljc1Ljc1Ljc1aDlhLjc1Ljc1IDAgMCAwIC43NS0uNzVWOC41YTEuNzUgMS43NSAwIDAgMC0xLjc1LTEuNzVoLTd6Ii8+PC9zdmc+" alt="">
                    <h3>Stays</h3>
                </div></a>

                <a href=""></a><div class="HP_i">
                    <img id="HP_iconn" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwLjUwNSA3LjVsLTE1LjI2Ni4wMjIuNjcyLjQxNS0xLjEtMi4yYS43NS43NSAwIDAgMC0uNjM4LS40MTRsLTIuMjkzLS4xQy44MiA1LjIyOC0uMDAzIDYuMDYuMDAzIDcuMDgzYy4wMDIuMjQzLjA1MS40ODQuMTQ2LjcwOWwyLjA3MiA0LjY4YTIuOTQ3IDIuOTQ3IDAgMCAwIDIuNzAxIDEuNzc4aDQuMDQzbC0uNjc2LTEuMDc1LTIuNDg0IDUuMTY4QTEuODMxIDEuODMxIDAgMCAwIDcuNDQ5IDIxaDIuMDk5YTEuODUgMS44NSAwIDAgMCAxLjQxOS0uNjY0bDUuMTY1LTYuMzYzLS41ODIuMjc3aDQuOTU2YzEuODIuMDkgMy4zOTktMS4zNDEgMy40OS0zLjE5OGwuMDA0LS4xMzRhMy40MjYgMy40MjYgMCAwIDAtMy40NC0zLjQxOWwtLjA3NC4wMDF6bS4wMiAxLjVoLjA0MmExLjkyNCAxLjkyNCAwIDAgMSAxLjkzMyAxLjkxNGwtLjAwMi4wNjVhMS44NjYgMS44NjYgMCAwIDEtMS45NTUgMS43NzJsLTQuOTkzLS4wMDFhLjc1Ljc1IDAgMCAwLS41ODIuMjc3bC01LjE2IDYuMzU1YS4zNDYuMzQ2IDAgMCAxLS4yNi4xMThoLTIuMWEuMzM2LjMzNiAwIDAgMS0uMy0uNDlsMi40OTMtNS4xODVhLjc1Ljc1IDAgMCAwLS42NzYtMS4wNzVINC45MjRhMS40NSAxLjQ1IDAgMCAxLTEuMzI4LS44NzhsLTIuMDctNC42NzZhLjM1LjM1IDAgMCAxIC4zMjYtLjQ3NGwyLjI1NS4xLS42MzgtLjQxNSAxLjEgMi4yYS43NS43NSAwIDAgMCAuNjcyLjQxNUwyMC41MDcgOXpNMTYuMzIzIDcuNzZsLTIuOTkyLTQuMDJBMS44NTEgMS44NTEgMCAwIDAgMTEuODUgM0g5Ljc4M2ExLjg1IDEuODUgMCAwIDAtMS42NTQgMi42NzJsMS40MzkgMi45MWEuNzUuNzUgMCAwIDAgMS4zNDQtLjY2NEw5LjQ3MiA1LjAwN2EuMzUxLjM1MSAwIDAgMSAuMzEyLS41MDdoMi4wNjZhLjM1LjM1IDAgMCAxIC4yNzkuMTRsMi45OSA0LjAxN2EuNzUuNzUgMCAxIDAgMS4yMDMtLjg5NnoiLz48L3N2Zz4=" alt="">
                    <h3>Flights</h3>
                </div></a>

                <a href=""></a><div class="HP_i">
                    <img id="HP_iconn" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLjY4NCA5LjQ0M2wtMS43LTMuNzljLS40Mi0xLjEyOC0xLjU0Mi0xLjkwNS0yLjc5NC0xLjkwM0g2LjgwOWEyLjk5OSAyLjk5OSAwIDAgMC0yLjgxMSAxLjk0N0wyLjMxNiA5LjQ0M2EuNzUuNzUgMCAxIDAgMS4zNjguNjE0bDEuNy0zLjc5Yy4yMzgtLjYzLjc5OC0xLjAxOCAxLjQyNC0xLjAxN2gxMC4zODNhMS41IDEuNSAwIDAgMSAxLjQwNy45NzNsMS43MTggMy44MzRhLjc1Ljc1IDAgMSAwIDEuMzY4LS42MTR6TS43NSAxNi40NjhWMThhMi4yNSAyLjI1IDAgMCAwIDQuNSAwdi0xLjVhLjc1Ljc1IDAgMCAwLTEuNSAwVjE4YS43NS43NSAwIDAgMS0xLjUgMHYtMS41MzJhLjc1Ljc1IDAgMCAwLTEuNSAwem0yMSAwVjE4YS43NS43NSAwIDAgMS0xLjUgMHYtMS41YS43NS43NSAwIDAgMC0xLjUgMFYxOGEyLjI1IDIuMjUgMCAwIDAgNC41IDB2LTEuNTMyYS43NS43NSAwIDAgMC0xLjUgMHpNMTkuODc1IDEzLjVhLjM3NS4zNzUgMCAwIDEtLjM3NS0uMzc1Ljc1Ljc1IDAgMCAwIDEuNSAwYzAtLjYyMS0uNTA0LTEuMTI1LTEuMTI1LTEuMTI1YS43NS43NSAwIDAgMCAwIDEuNXptLjM3NS0uMzc1YS4zNzUuMzc1IDAgMCAxLS4zNzUuMzc1Ljc1Ljc1IDAgMCAwIDAtMS41Yy0uNjIxIDAtMS4xMjUuNTA0LTEuMTI1IDEuMTI1YS43NS43NSAwIDAgMCAxLjUgMHptLS4zNzUtLjM3NWMuMjA3IDAgLjM3NS4xNjguMzc1LjM3NWEuNzUuNzUgMCAwIDAtMS41IDBjMCAuNjIxLjUwNCAxLjEyNSAxLjEyNSAxLjEyNWEuNzUuNzUgMCAwIDAgMC0xLjV6bS0uMzc1LjM3NWMwLS4yMDcuMTY4LS4zNzUuMzc1LS4zNzVhLjc1Ljc1IDAgMCAwIDAgMS41Yy42MjEgMCAxLjEyNS0uNTA0IDEuMTI1LTEuMTI1YS43NS43NSAwIDAgMC0xLjUgMHpNNC4xMjUgMTJDMy41MDQgMTIgMyAxMi41MDQgMyAxMy4xMjVhLjc1Ljc1IDAgMCAwIDEuNSAwIC4zNzUuMzc1IDAgMCAxLS4zNzUuMzc1Ljc1Ljc1IDAgMCAwIDAtMS41em0xLjEyNSAxLjEyNWMwLS42MjEtLjUwNC0xLjEyNS0xLjEyNS0xLjEyNWEuNzUuNzUgMCAwIDAgMCAxLjUuMzc1LjM3NSAwIDAgMS0uMzc1LS4zNzUuNzUuNzUgMCAwIDAgMS41IDB6TTQuMTI1IDE0LjI1Yy42MjEgMCAxLjEyNS0uNTA0IDEuMTI1LTEuMTI1YS43NS43NSAwIDAgMC0xLjUgMGMwLS4yMDcuMTY4LS4zNzUuMzc1LS4zNzVhLjc1Ljc1IDAgMCAwIDAgMS41ek0zIDEzLjEyNWMwIC42MjEuNTA0IDEuMTI1IDEuMTI1IDEuMTI1YS43NS43NSAwIDAgMCAwLTEuNWMuMjA3IDAgLjM3NS4xNjguMzc1LjM3NWEuNzUuNzUgMCAwIDAtMS41IDB6TTIuNzUgMTAuNWgxOC41Yy42OSAwIDEuMjUuNTYgMS4yNSAxLjI1djMuNzVhLjI1LjI1IDAgMCAxLS4yNS4yNUgxLjc1YS4yNS4yNSAwIDAgMS0uMjUtLjI1di0zLjc1YzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1em0wLTEuNUEyLjc1IDIuNzUgMCAwIDAgMCAxMS43NXYzLjc1YzAgLjk2Ni43ODQgMS43NSAxLjc1IDEuNzVoMjAuNUExLjc1IDEuNzUgMCAwIDAgMjQgMTUuNXYtMy43NUEyLjc1IDIuNzUgMCAwIDAgMjEuMjUgOUgyLjc1eiIvPjwvc3ZnPg==" alt="">
                    <h3>Car Rentals</h3>
                </div></a>

                <a href=""></a><div class="HP_i">
                    <img id="HP_iconn" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzLjUgM2ExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHpNMTUgM2EzIDMgMCAxIDAtNiAwIDMgMyAwIDAgMCA2IDB6bTYgNC41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0xLjUgMGEzIDMgMCAxIDAtNiAwIDMgMyAwIDAgMCA2IDB6TTYgNy41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0xLjUgMGEzIDMgMCAxIDAtNiAwIDMgMyAwIDAgMCA2IDB6TTIxIDE1YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0xLjUgMGEzIDMgMCAxIDAtNiAwIDMgMyAwIDAgMCA2IDB6bS05LTMuNzVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6bTEuNSAwYTMgMyAwIDEgMC02IDAgMyAzIDAgMCAwIDYgMHpNNiAxNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHptMS41IDBhMyAzIDAgMSAwLTYgMCAzIDMgMCAwIDAgNiAwem0xMC4wNjYgMS4yNzdhNy41IDcuNSAwIDAgMS0zLjA3NyAyLjA1Ljc1Ljc1IDAgMCAwIC40OTggMS40MTUgOSA5IDAgMCAwIDMuNjkzLTIuNDYuNzUuNzUgMCAxIDAtMS4xMTQtMS4wMDV6bTEuNzk4LTYuNDY2Yy4xNzcuOTIyLjE4MyAxLjg2OS4wMTUgMi43OTJhLjc1Ljc1IDAgMSAwIDEuNDc2LjI2OGMuMi0xLjEwNi4xOTQtMi4yNC0uMDE5LTMuMzQ0YS43NS43NSAwIDEgMC0xLjQ3Mi4yODR6bS01LjMzNy01Ljc4NGE3LjUgNy41IDAgMCAxIDMuNTQgMi4xOTYuNzUuNzUgMCAwIDAgMS4xMTMtMS4wMDQgOS4wMDIgOS4wMDIgMCAwIDAtNC4yNDctMi42MzYuNzUuNzUgMCAxIDAtLjQwNiAxLjQ0NHpNNi40MzQgNi4yMjNhNy41IDcuNSAwIDAgMSAzLjUzOS0yLjE5Ni43NS43NSAwIDEgMC0uNDA2LTEuNDQ0QTkuMDAxIDkuMDAxIDAgMCAwIDUuMzIgNS4yMTlhLjc1Ljc1IDAgMCAwIDEuMTE0IDEuMDA0ek00LjYzNiAxMi42OWE3LjYwMiA3LjYwMiAwIDAgMSAwLTIuODc4Ljc1Ljc1IDAgMSAwLTEuNDcyLS4yODQgOS4xMDIgOS4xMDIgMCAwIDAgMCAzLjQ0Ni43NS43NSAwIDAgMCAxLjQ3Mi0uMjg0em00Ljg3NiA1LjYzOWE3LjUxNyA3LjUxNyAwIDAgMS0zLjAzNS0yLjAwNS43NS43NSAwIDAgMC0xLjEwNiAxLjAxNCA5LjAxNyA5LjAxNyAwIDAgMCAzLjY0MSAyLjQwNS43NS43NSAwIDEgMCAuNS0xLjQxNHpNNy4zMSAyMS44NzJBMS41IDEuNSAwIDAgMCA4LjY3MiAyNGg2LjY1NmExLjUgMS41IDAgMCAwIDEuMzYyLTIuMTI4bC0zLjMxNC04LjIxN2MtLjM2MS0uNzg1LTEuMjUyLTEuMTE0LTIuMDA1LS43NjdhMS41IDEuNSAwIDAgMC0uNzMzLjczNGwtMy4zNDMgOC4yODN6bTEuMzc3LjU5NWwzLjMyOC04LjI1LS4wMTUuMDMzIDMuMzEzIDguMjE3LjAxNS4wMzNIOC42NzJ6Ii8+PC9zdmc+" alt="">
                    <h3>Attractions</h3>
                </div></a>

                <a href=""></a><div class="HP_i">
                    <img id="HP_iconn" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIuNzUgMTJoMTguNWMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNVYxOGwuNzUtLjc1SC43NWwuNzUuNzV2LTQuNzVjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjV6bTAtMS41QTIuNzUgMi43NSAwIDAgMCAwIDEzLjI1VjE4YzAgLjQxNC4zMzYuNzUuNzUuNzVoMjIuNUEuNzUuNzUgMCAwIDAgMjQgMTh2LTQuNzVhMi43NSAyLjc1IDAgMCAwLTIuNzUtMi43NUgyLjc1ek0wIDE4djNhLjc1Ljc1IDAgMCAwIDEuNSAwdi0zQS43NS43NSAwIDAgMCAwIDE4em0yMi41IDB2M2EuNzUuNzUgMCAwIDAgMS41IDB2LTNhLjc1Ljc1IDAgMCAwLTEuNSAwem0tLjc1LTYuNzVWNC41YTIuMjUgMi4yNSAwIDAgMC0yLjI1LTIuMjVoLTE1QTIuMjUgMi4yNSAwIDAgMCAyLjI1IDQuNXY2Ljc1YS43NS43NSAwIDAgMCAxLjUgMFY0LjVhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMTVhLjc1Ljc1IDAgMCAxIC43NS43NXY2Ljc1YS43NS43NSAwIDAgMCAxLjUgMHptLTEzLjI1LTNoN2EuMjUuMjUgMCAwIDEgLjI1LjI1djIuNzVsLjc1LS43NWgtOWwuNzUuNzVWOC41YS4yNS4yNSAwIDAgMSAuMjUtLjI1em0wLTEuNUExLjc1IDEuNzUgMCAwIDAgNi43NSA4LjV2Mi43NWMwIC40MTQuMzM2Ljc1Ljc1Ljc1aDlhLjc1Ljc1IDAgMCAwIC43NS0uNzVWOC41YTEuNzUgMS43NSAwIDAgMC0xLjc1LTEuNzVoLTd6Ii8+PC9zdmc+" alt="">
                    <h3>Airport Taxis</h3>
                </div></a>

            </div>
                    
                </div>
    </div>`
};

export default navbar