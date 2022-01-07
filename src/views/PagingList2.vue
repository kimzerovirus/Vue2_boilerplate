<template>
	<div>
		<!-- <Pagination /> -->
	</div>
</template>

<script>
// import Pagination from "@/components/Pagination.vue";
import { testApi } from '@/api';
export default {
	components: {
		// Pagination,
	},
	data() {
		return {
			list: [],
			content: [],
			pageable: {
				fisrt: null,
				last: null,
				offset: null,
				pageNumber: null,
				pageSize: null,
				totalElements: null,
				totalPages: null,
			},
		};
	},
	created() {
		this.getList();
	},
	methods: {
		async getList() {
			try {
				const { data } = await testApi();
				this.list = data;
				const totalElements = data.length; //총 게시물 수
				console.log(totalElements);
				const countList = 10; //한페이지에 출력될 게시물 수
				const countPage = 5; //하단에 출력되는 페이지 수
				let currentPage = 0; //현재 페이지 번호

				const totalPage =
					totalElements % countList > 0
						? totalElements / countList + 1
						: totalElements / countList;

				console.log(totalElements, countList);
				console.log(totalPage, '총 페이지 수', currentPage, '현재페이지');

				if (currentPage > totalPage) currentPage = totalPage; //현재 페이지가 총 페이지를 넘어선다면
				console.log(currentPage);
				let startPage =
					((currentPage - 1) / 10) * 10 + 1 > totalPage - countPage + 1
						? totalPage - countPage + 1
						: ((currentPage - 1) / 10) * 10 + 1; // 마지막 페이지에서부터 countPage개수를 넘긴다면 제한을 걸어준다, 0을 스타트 값으로 한다면 +1을 해줘야 한다 따라서 endPage에서 -1을 해줘야 한다.
				let endPage = startPage + countPage - 1;
				console.log(startPage, '시작 페이지', endPage, '끝 페이지');

				if (currentPage == data.length) {
					this.first = false;
					this.last = true;
				} else if (currentPage == 0) {
					this.first = true;
					this.last = false;
				} else {
					this.first = false;
					this.last = false;
				}

				this.content = data.slice(0, 10);
				this.pageable = data.pageable;
				this.pageable.totalPages = totalPage;
				this.pageable.totalElements = totalElements;
				this.pageable.first = data.first;
				this.pageable.last = data.last;

				/*
    pageable {
        fisrt
        last
        offset
        pageNumber
        pageSize
        totalElements
        totalPages
    }
*/
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
