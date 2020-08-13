import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Blog } from 'src/app/models/blog';
// import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.scss'],
})
export class ManageBlogsComponent implements OnInit {
  model = new Blog('', '', null);
  @ViewChild('blogForm') form: any;
  blogs: Observable<Blog[]>;
  blogCollection: AngularFirestoreCollection<Blog>;
  constructor(
    public afs: AngularFirestore,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.blogCollection = this.afs.collection('blogs');
    this.blogs = this.blogCollection.valueChanges();
    console.log((this.blogs = this.blogCollection.valueChanges()));
  }

  onSubmit() {
    this.afs
      .collection('blogs')
      .doc(this.model.title)
      .set(Object.assign({}, this.model));
    this.form.resetForm();
  }

  openDialog(blog): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
      data: blog,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public afs: AngularFirestore,
    public dialog: MatDialog
  ) {}

  onNoClick(): void {
    this.dialog.closeAll();
  }

  delete(blog: { title: string }) {
    console.log(blog.title);
    this.afs
      .collection('blogs')
      .doc(blog.title)
      .delete()
      .then(function () {
        console.log('Document successfully deleted!');
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
  }
}
