<template>
	<div>
		<table>
			<tr v-for="(item, index) in content" :key="index">
				<td>{{ item.id }}</td>
				<td>{{ item.title }}</td>
				<td>{{ item.body }}</td>
			</tr>
		</table>
		<Pagination :pageable="pageable" @goPage="goPage" />
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
				first: null, //시작페이지 boolean
				last: null, //끝페이지 boolean
				offset: null,
				pageNumber: null, //현재페이지 번호
				pageSize: null, //한페이지에 출력될 게시물 수
				totalElements: null, //총 게시물 수
				totalPages: null, //총 페이지 수
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
				let currentPage = 0; //현재 페이지 번호

				const totalPage =
					totalElements % countList > 0
						? Math.floor(totalElements / countList) + 1
						: totalElements / countList;

				console.log(totalElements, countList);
				console.log(totalPage, '총 페이지 수', currentPage, '현재페이지');

				if (currentPage > totalPage) currentPage = totalPage; //현재 페이지가 총 페이지를 넘어선다면

				this.content = data.slice(0, 10);
				this.pageable.totalPages = totalPage;
				this.pageable.totalElements = totalElements;
				this.pageable.first = true;
				this.pageable.last = false;
				this.pageable.pageSize = countList;
				this.pageable.pageNumber = currentPage;

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
		goPage(pageNumber) {
			if (pageNumber > this.pageable.totalPages - 1) {
				pageNumber = this.pageable.totalPages - 1; //현재 페이지가 총 페이지를 넘어선다면
			}

			if (pageNumber == this.pageable.totalPages - 1) {
				this.pageable.first = false;
				this.pageable.last = true;
			} else if (pageNumber == 0) {
				this.pageable.first = true;
				this.pageable.last = false;
			} else {
				this.pageable.first = false;
				this.pageable.last = false;
			}

			this.content = this.list.slice(
				pageNumber * this.pageable.pageSize,
				(pageNumber + 1) * this.pageable.pageSize,
			);
			this.pageable.pageNumber = pageNumber;

			console.log(pageNumber, this.pageable.totalPages, this.pageable.last);
		},
	},
};
</script>

<style></style>
