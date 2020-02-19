import React from "react";
import styled from "styled-components";
import { useUser } from "../../../context/user-context";

const UserCard = styled.div`
	width: 100%;
	height: auto;
	background-color: #f3f7f9;
	display: block;
	& .user-info {
		width: 100%;
		height: 80px;
		display: flex;
		padding: 10px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		position: relative;
		& .inner {
			top: 50%;
			flex: 1;
			position: absolute;
			display: flex;
			font-family: montserrat, monospace;
			& .avatar-container {
				flex: 1;
				& .avatar {
					position: relative;
					z-index: 1;
					width: 70px;
					height: 70px;
					border-radius: 50%;
					border: 5px solid #fff;
					background-color: #f3f3f3;
					text-align:center;
					font-size:18px;
					text-transform:uppercase;
				}
			}
			& .info {
				flex: 3;
				font-weight: bold;
				font-size: 14px;
				margin-left: 10px;
				& .email {
					color: grey;
					font-size: 12px;
				}
			}
		}
	}
`;

function UserCardNav() {
	const user = useUser();
	return (
		<UserCard>
			<div className="user-info">
				<div className="inner">
					<div className="avatar-container">
						<div className="avatar">
							{user && user.avatar ? (
								<img
									src={
										user.avatar
									}
									alt={`Avatar for ${user.first_name}`}
									className="avi"
								/>
							) : (
								<h3>{`${user.first_name.charAt(
									0
								)}${user.last_name.charAt(
									0
								)}`}</h3>
							)}
						</div>
					</div>
					<div className="info">
						<p>
							{`${user.first_name} ${user.last_name}`}
							<br />
							<span className="email">
								{user.email}
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="actions"></div>
		</UserCard>
	);
}

export { UserCardNav };
