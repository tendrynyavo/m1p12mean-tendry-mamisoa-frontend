import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent implements OnInit {
  
  articles: any[] = [];
  categories: any[] = [];
  newArticle = { title: '', content: '', category: '' };

  constructor(private articleService: ArticleService, private categoryService: CategoryService) { }
  
  loadArticles(): void {
    this.articleService.getArticles().subscribe(data => 
      this.articles = data
    );
  }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => 
      this.articles = data
    );

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  deleteArticle(id: string): void {
    this.articleService.deleteArticle(id).subscribe(() => 
      this.loadArticles()
    );
  }

  addArticle(): void {
    if (this.newArticle.title && this.newArticle.content) {
      this.articleService.createArticle(this.newArticle).subscribe(() => {
        this.loadArticles();
        this.newArticle = { title: '', content: '', category: '' };
      });
    }
  }

}