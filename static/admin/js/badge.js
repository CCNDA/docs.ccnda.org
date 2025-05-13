"use strict";

// 等待 CMS 初始化
window.addEventListener('load', function() {
	// 建立徽章圖片（只建立一次）
	const badgeImg = document.createElement('img');
	badgeImg.src = 'https://api.netlify.com/api/v1/badges/364f8bba-e504-4eff-aa6e-f5c11270164c/deploy-status';
	badgeImg.alt = 'Netlify 部署狀態';
	badgeImg.style.height = '20px';
	badgeImg.style.marginLeft = '10px';

	// 自動更新徽章圖片
	function updateBadge() {
		const timestamp = new Date().getTime();
		badgeImg.src = `https://api.netlify.com/api/v1/badges/364f8bba-e504-4eff-aa6e-f5c11270164c/deploy-status?${timestamp}`;
	}
	setInterval(updateBadge, 5000);

	// 插入 header > nav > ul > li
	function addBadge() {
		const ul = document.querySelector('header nav ul');
		if (!ul) return;
		// 先移除舊的徽章
		const oldBadge = ul.querySelector('.netlify-badge');
		if (oldBadge) ul.removeChild(oldBadge);

		const badgeLi = document.createElement('li');
		badgeLi.className = 'netlify-badge';
		badgeLi.appendChild(badgeImg);
		ul.appendChild(badgeLi);
	}

	const checkCMS = setInterval(function() {
		const ul = document.querySelector('header nav ul');
		if (window.CMS && ul) {
			clearInterval(checkCMS);
			addBadge();
		}
	}, 500);
});
