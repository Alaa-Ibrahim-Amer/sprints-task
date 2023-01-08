<?php
define('BASE_PATH', '../../');
require_once('../../logic/Color&Size.php');
require_once('../../logic/categories.php');
$colors = getColors();
$sizes = getSizes();
$categories = getCategories();
?>
  <body>
  <div class="container-scroller">
        <!-- partial:../../partials/_sidebar.html -->
        <div class="container-fluid page-body-wrapper" >
       <?php require_once('../navbar.php'); ?>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">ADD product</h4>
                    <form class="forms-sample" method="post" >
                      <div class="form-group">
                        <label >Name</label>
                        <input type="text" class="form-control" placeholder="Name" name="name">
                      </div>
                      <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" rows="4" name="description"></textarea>
                      </div>
      
                      <div class="form-group">
                      <label>Image upload</label><br>
                      <input type="file" name="image_url"/>
                      </div>
                      <div class="form-group">
                        <label >Price</label>
                        <input type="text" class="form-control"  placeholder="Price" name="price">
                      </div>
                      <div class="form-group">
                        <label >Bar_code</label>
                        <input type="text" class="form-control" placeholder="Bar_code" name="bar_code">
                      </div>
                      <div class="form-group">
                        <label>Size</label>
                        <select class="form-control" name="size_name" >
                        <?php
                        foreach ($sizes as $size) {
                         ?>
                          <option><?=$size['name']?></option>

                          <?php } ?>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Color</label>
                        <select class="form-control" name="color_name">
                        <?php
                        foreach ($colors as $color) {
                         ?>
                          <option><?=$color['name']?></option>

                          <?php } ?>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Category</label>
                        <select class="form-control" name="category_name">
                        <?php
                        foreach ($categories as $cat) {
                         ?>
                          <option><?=$cat['name']?></option>

                          <?php } ?>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Discount</label>
                        <input type="text" class="form-control"placeholder="Discount" name="discount">
                      </div>
                      <div class="form-group">
                      <div class="form-check form-check-flat form-check-primary">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" name="is_recent"> it is a Recent product <i class="input-helper"></i></label>
                      </div>
                      </div>
                      <div class="form-group">
                      <div class="form-check form-check-flat form-check-primary">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" name="is_featured"> it is a Featured product <i class="input-helper"></i></label>
                      </div>
                      </div>
                      <button type="submit" class="btn btn-primary me-2">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content-wrapper ends -->
        </div>
        </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
  </body>