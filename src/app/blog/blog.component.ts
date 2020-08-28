import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Blog } from '../models/blog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogs: Observable<Blog[]>;
  blogCollection: AngularFirestoreCollection<Blog>;
  selectedBlog = [];

  constructor(public afs: AngularFirestore) {}

  ngOnInit(): void {
    this.blogCollection = this.afs.collection('blogs');
    this.blogs = this.blogCollection.valueChanges();
    this.blogCollection.valueChanges().subscribe((data) => {
      this.selectedBlog = (data[0] as unknown) as Blog[];
    });
  }

  selectBlog(blog: Blog[]) {
    this.selectedBlog = blog;
  }
}
