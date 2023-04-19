require "test_helper"

class Example1ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get example1_index_url
    assert_response :success
  end
end
